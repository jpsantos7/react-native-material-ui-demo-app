import { View, StyleSheet, Text } from 'react-native';
import React, { Component, PropTypes } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

import Container from '../Container';
import { Toolbar, COLOR } from '../react-native-material-ui';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class Loading extends Component {
    constructor(props) {
        super();
        this.state = {
            visible: false
        };
    }
    /* eslint react/no-did-mount-set-state: 0 */
    componentDidMount() {
        setInterval(() => {
            this.setState({
                visible: !this.state.visible
            });
        }, 3000);
    }
    static contextTypes = {
        uiTheme: PropTypes.object.isRequired,
    };
    render() {
        const { accentColor } = this.context.uiTheme.palette;
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
                <View style={styles.loadingContainer}>
                    <Spinner
                        color={accentColor}
                        visible={this.state.visible}
                        textContent={"Carregando..."}
                        textStyle={{ color: '#fff' }}
                    />
                </View>
            </Container>
        );
    }
}

Loading.propTypes = propTypes;

export default Loading;
