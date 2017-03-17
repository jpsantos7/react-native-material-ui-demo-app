import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import React, { Component, PropTypes } from 'react';
import { COLOR, Button } from '../react-native-material-ui';
import { TextField } from 'react-native-material-textfield';

const styles = StyleSheet.create({
    loginContainer: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        flex: 1,
        alignSelf: 'stretch',
    },
    label: {
        color: COLOR.grey600,
    },
    valueText: {
        fontSize: 16,
        color: COLOR.grey800,
        marginBottom: 24,
    },
    errorContainer: {
        padding: 16,
        borderColor: COLOR.red400,
        borderWidth: 1,
        backgroundColor: COLOR.red50,
        borderRadius: 2,
    },
    errorText: {
        color: COLOR.red500,
    },
    canvas: {
        maxWidth: 320,
        alignSelf: 'center',
    },
});

class Login extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired,
        route: PropTypes.object.isRequired,
    };
    static contextTypes = {
        uiTheme: PropTypes.object.isRequired,
    };
    state = {
        username: '',
        password: '',
    };
    render() {
        const { primaryColor } = this.context.uiTheme.palette;
        let { username } = this.state;
        let { password } = this.state;

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ScrollView style={styles.loginContainer}>
                    <Image
                        source={require('../assets/logo-color.png')}
                        resizeMode="contain"
                        style={styles.canvas}
                    />
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>Tem um erro no username</Text>
                        <Text style={styles.errorText}>Tem um erro na password</Text>
                    </View>
                    <TextField
                        label="Username"
                        ref="username"
                        value={username}
                        onBlur={() => this.setState({ username: this.refs.username.value() })}
                        textColor={primaryColor}
                        baseColor={primaryColor}
                        tintColor={primaryColor}
                    />
                    <TextField
                        label="Password"
                        ref="password"
                        value={password}
                        onBlur={() => this.setState({ password: this.refs.password.value() })}
                        textColor={primaryColor}
                        baseColor={primaryColor}
                        tintColor={primaryColor}
                        error="You made a mistake"
                        errorColor={COLOR.red500}
                        secureTextEntry
                    />
                    <Button
                        raised
                        primary
                        text="Login"
                        onPress={() => this.props.navigator.pop()}
                    />
                </ScrollView>
            </View>
        );
    }
}
export default Login;