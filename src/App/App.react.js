import React, { Component } from 'react';
import { Navigator, NativeModules, StatusBar, View } from 'react-native';

import { COLOR, ThemeProvider } from '../react-native-material-ui';
import routes from '../routes';
import Container from '../Container';

const UIManager = NativeModules.UIManager;

const uiTheme = {
    palette: {
        primaryColor: '#0f314b',
        accentColor: '#e7382a',
        /*primaryColor: COLOR.green500,*/
        /*accentColor: COLOR.pink500,*/
    },
    typography: {
        body2: {
            fontSize: 18,
        },
        body1: {
            fontSize: 18,
        },
        buttons: {
            fontSize: 16,
        },
    },
};

class App extends Component {
    static configureScene(route) {
        return route.animationType || Navigator.SceneConfigs.FloatFromRight;
    }
    static renderScene(route, navigator) {
        return (
            <Container>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
                <View style={{ backgroundColor: '#0f314b', height: 24 }} />
                <route.Page
                    route={route}
                    navigator={navigator}
                />
            </Container>
        );
    }
    componentWillMount() {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Navigator
                    configureScene={App.configureScene}
                    initialRoute={routes.home}
                    ref={this.onNavigatorRef}
                    renderScene={App.renderScene}
                />
            </ThemeProvider>
        );
    }
}

export default App;
