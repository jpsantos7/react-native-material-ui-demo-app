import { ScrollView, StyleSheet, Text, ToastAndroid } from 'react-native';
import React, { Component, PropTypes } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Container from '../Container';
import { COLOR, Toolbar, Subheader, ListItem, Button } from '../react-native-material-ui';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: COLOR.grey800,
        marginBottom: 4,
    },
    productId: {
        fontSize: 18,
        marginBottom: 4,
    },
    time: {
        fontSize: 18,
        textAlign: 'right',
    },
    flaws: {
        fontSize: 18,
        textAlign: 'right',
        color: COLOR.red500,
    },
    label: {
        fontSize: 16,
    },
    bold: {
        fontWeight: 'bold',
        color: COLOR.grey800,
    },
});

class Tasks extends Component {
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
                <ScrollView>
                    <Subheader text="Carregamentos de Canal" />
                    <ListItem
                        divider
                        numberOfLines="dynamic"
                        centerElement={
                            <Grid>
                                <Row>
                                    <Col size={4}>
                                        <Text style={styles.title} numberOfLines={2}>Ben-u-ron iuhasiudh ashdoash doash oahsdouahsd ouash douahmij asoijaoisjd oiaj</Text>
                                        <Text style={styles.productId}>1234567</Text>
                                        <Row>
                                            <Col>
                                                <Text style={styles.label}>
                                                    <Text style={styles.bold}>Área:</Text> TDL
                                                </Text>
                                            </Col>
                                            <Col>
                                                <Text style={styles.label}>
                                                    <Text style={styles.bold}>Sector:</Text> 123
                                                </Text>
                                            </Col>
                                        </Row>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Canais:</Text> 20, 21
                                        </Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Nível:</Text> 2
                                        </Text>
                                    </Col>
                                    <Col size={2} style={{ justifyContent: 'space-between' }}>
                                        <Text style={styles.time}>2h 30 mins</Text>
                                        <Text style={styles.flaws}>3 falhas</Text>
                                        <Button raised primary text="Feito"
                                            onPress={() => ToastAndroid.show('TÁ FEITO', ToastAndroid.SHORT)}
                                         />
                                    </Col>
                                </Row>
                            </Grid>
                        }
                    />
                    <ListItem
                        divider
                        numberOfLines="dynamic"
                        centerElement={
                            <Grid>
                                <Row>
                                    <Col size={4}>
                                        <Text style={styles.title} numberOfLines={2}>Ben-u-ron</Text>
                                        <Text style={styles.productId}>1234567</Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Área:</Text> TDL
                                        </Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Sector:</Text> 123
                                        </Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Canais:</Text> 20, 21 22, 120
                                        </Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Nível:</Text> 2
                                        </Text>
                                    </Col>
                                    <Col size={2} style={{ justifyContent: 'space-between' }}>
                                        <Text style={styles.time}>2h 30 mins</Text>
                                        <Text style={styles.flaws}>3 falhas</Text>
                                        <Button raised primary text="Feito"
                                            onPress={() => ToastAndroid.show('TÁ FEITO', ToastAndroid.SHORT)}
                                         />
                                    </Col>
                                </Row>
                            </Grid>
                        }
                    />
                    <Subheader text="Arrumação de Produto" />
                    <ListItem
                        divider
                        numberOfLines="dynamic"
                        centerElement={
                            <Grid>
                                <Row>
                                    <Col size={4}>
                                        <Text style={styles.title} numberOfLines={2}>Ben-u-ron</Text>
                                        <Text style={styles.productId}>1234567</Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Área:</Text> TDL
                                        </Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Sector:</Text> 123
                                        </Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Canais:</Text> 20, 21 22, 120
                                        </Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Nível:</Text> 2
                                        </Text>
                                    </Col>
                                    <Col size={2} style={{ justifyContent: 'space-between' }}>
                                        <Text style={styles.time}>2h 30 mins</Text>
                                        <Text style={styles.flaws}></Text>
                                        <Button raised primary text="Feito"
                                            onPress={() => ToastAndroid.show('TÁ FEITO', ToastAndroid.SHORT)}
                                         />
                                    </Col>
                                </Row>
                            </Grid>
                        }
                    />
                    <ListItem
                        divider
                        numberOfLines="dynamic"
                        centerElement={
                            <Grid>
                                <Row>
                                    <Col size={4}>
                                        <Text style={styles.title} numberOfLines={2}>Ben-u-ron</Text>
                                        <Text style={styles.productId}>1234567</Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Área:</Text> TDL
                                        </Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Sector:</Text> 123
                                        </Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Canais:</Text> 20, 21 22, 120
                                        </Text>
                                        <Text style={styles.label}>
                                            <Text style={styles.bold}>Nível:</Text> 2
                                        </Text>
                                    </Col>
                                    <Col size={2} style={{ justifyContent: 'space-between' }}>
                                        <Text style={styles.time}>2h 30 mins</Text>
                                        <Text style={styles.flaws}></Text>
                                        <Button raised primary text="Feito"
                                            onPress={() => ToastAndroid.show('TÁ FEITO', ToastAndroid.SHORT)}
                                         />
                                    </Col>
                                </Row>
                            </Grid>
                        }
                    />
                </ScrollView>
            </Container>
        );
    }
}

Tasks.propTypes = propTypes;

export default Tasks;
