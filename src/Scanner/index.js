import { View, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';
import Container from '../Container';

import { Toolbar, Button, COLOR } from '../react-native-material-ui';
import { TextField } from 'react-native-material-textfield';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    scanContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});

class Scanner extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    state = {
        barcode: '',
    };
    render() {
        let { barcode } = this.state;
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
                <View style={styles.scanContainer}>
                    <View>
                        <TextField
                            label=""
                            ref="barcode"
                            value={barcode}
                            onBlur={() => this.setState({ barcode: this.refs.barcode.value() })}
                            textColor="#fff"
                            baseColor="#fff"
                            tintColor="#fff"
                            error="You made a mistake"
                            errorColor={COLOR.red500}
                            secureTextEntry
                        />
                        <Button raised primary text="OK" style={{ paddingTop: 20 }} />
                    </View>
                </View>
            </Container>
        );
    }
}

Scanner.propTypes = propTypes;

export default Scanner;
