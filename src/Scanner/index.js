import { View, StyleSheet, TextInput } from 'react-native';
import React, { Component, PropTypes } from 'react';
import Container from '../Container';

import { Toolbar, Button } from '../react-native-material-ui';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    scanContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});

class Scanner extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
                <View style={styles.scanContainer}>
                    <View>
                        <TextInput
                            style={{ width: 280, height: 40, marginBottom: 8 }}
                            keyboardType="numeric"
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                        <Button raised accent text="OK" style={{ paddingTop: 20 }} />
                    </View>
                </View>
            </Container>
        );
    }
}

Scanner.propTypes = propTypes;

export default Scanner;
