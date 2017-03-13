import { View, ScrollView, StyleSheet, TextInput, Image } from 'react-native';
import React, { Component, PropTypes } from 'react';
import { COLOR, Button } from '../react-native-material-ui';
import { TextField } from 'react-native-material-textfield';

const styles = StyleSheet.create({
    loginContainer: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    label: {
        color: COLOR.grey600,
    },
    valueText: {
        fontSize: 16,
        color: COLOR.grey800,
        marginBottom: 24,
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
                backgroundColor: primaryColor,
                flex: 1,
                alignItems: 'center',
              }}>
                <ScrollView style={styles.loginContainer}>
                    <Image
                      source={require('../assets/logo-w.png')}
                      resizeMode="contain"
                      style={{width: 320}}
                    />
                    <TextField
                        label='Username'
                        ref='username'
                        value={username}
                        onBlur={ () => this.setState({ username: this.refs.username.value() }) }
                        textColor="#fff"
                        baseColor="#fff"
                        tintColor="#fff"
                    />
                    <TextField
                        label='Password'
                        ref='password'
                        value={password}
                        onBlur={ () => this.setState({ password: this.refs.password.value() }) }
                        textColor="#fff"
                        baseColor="#fff"
                        tintColor="#fff"
                        error="You made a mistake"
                        errorColor={COLOR.red500}
                        secureTextEntry={true}
                    />
                    <Button raised accent text="Login"
                        style={{ paddingTop: 20 }}
                        onPress={() => this.props.navigator.pop()}
                    />
                </ScrollView>
            </View>
        );
    }
}
export default Login;