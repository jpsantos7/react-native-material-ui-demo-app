import { ScrollView, StyleSheet, Text, ToastAndroid, Platform } from 'react-native';
import React, { Component, PropTypes } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Container from '../Container';
import { COLOR, Toolbar, Subheader, ListItem, Button } from '../react-native-material-ui';

const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    TasksContainer: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 16,
        color: COLOR.grey800,
        marginBottom: 4,
    },
    productId: {
        color: COLOR.grey800,
    },
    info: {
        color: COLOR.grey600,
    },
    time: {
        textAlign: 'right',
        color: COLOR.grey600,
        marginBottom: 4,
    },
    flaws: {
        textAlign: 'right',
        color: COLOR.red500,
        marginBottom: 8,
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
                                    <Col size={3}>
                                        <Text style={styles.title} numberOfLines={2}>Ben-u-ron iuhasiudh ashdoash doash oahsdouahsd ouash douahmij asoijaoisjd oiaj</Text>
                                        <Text style={styles.productId}>1234567</Text>
                                        {/* Area, Sector */}
                                        <Text style={styles.info}>Área: TDL Sector: 123</Text>
                                        {/* Channels list */}
                                        <Text style={styles.info}>Canais: 20, 21 22, 120 </Text>
                                        {/* Level - May or may not appear */}
                                        <Text style={styles.info}>Nível: 2</Text>
                                    </Col>
                                    <Col size={1} style={{ justifyContent: 'space-around' }}>
                                        <Text style={styles.time}>2h 30 mins</Text>
                                        <Text style={styles.flaws}>3 falhas</Text>
                                        <Button raised primary text="Feito"
                                            onPress={() => ToastAndroid.show('List item pressed', ToastAndroid.SHORT)}
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
                                    <Col size={3}>
                                        <Text style={styles.title} numberOfLines={2}>Ben-u-ron</Text>
                                        <Text style={styles.productId}>1234567</Text>
                                        {/* Area, Sector */}
                                        <Text style={styles.info}>Área: TDL Sector: 123</Text>
                                        {/* Channels list */}
                                        <Text style={styles.info}>Canais: 20, 21 22, 120 </Text>
                                        {/* Level - May or may not appear */}
                                        <Text style={styles.info}>Nível: 2</Text>
                                    </Col>
                                    <Col size={1} style={{ justifyContent: 'space-around' }}>
                                        <Text style={styles.time}>2h 30 mins</Text>
                                        <Text style={styles.flaws}>3 falhas</Text>
                                        <Button raised primary text="Feito"
                                            onPress={() => ToastAndroid.show('List item pressed', ToastAndroid.SHORT)}
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
                                    <Col size={3}>
                                        <Text style={styles.title} numberOfLines={2}>Ben-u-ron</Text>
                                        <Text style={styles.productId}>1234567</Text>
                                        {/* Area, Sector */}
                                        <Text style={styles.info}>Área: TDL Sector: 123</Text>
                                        {/* Channels list */}
                                        <Text style={styles.info}>Canais: 20, 21 22, 120 </Text>
                                        {/* Level - May or may not appear */}
                                        <Text style={styles.info}>Nível: 2</Text>
                                    </Col>
                                    <Col size={1} style={{ justifyContent: 'space-around' }}>
                                        <Text style={styles.time}>2h 30 mins</Text>
                                        <Text style={styles.flaws}></Text>
                                        <Button raised primary text="Feito"
                                            onPress={() => ToastAndroid.show('List item pressed', ToastAndroid.SHORT)}
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
                                    <Col size={3}>
                                        <Text style={styles.title} numberOfLines={2}>Ben-u-ron</Text>
                                        <Text style={styles.productId}>1234567</Text>
                                        {/* Area, Sector */}
                                        <Text style={styles.info}>Área: TDL Sector: 123</Text>
                                        {/* Channels list */}
                                        <Text style={styles.info}>Canais: 20, 21 22, 120 </Text>
                                        {/* Level - May or may not appear */}
                                        <Text style={styles.info}>Nível: 2</Text>
                                    </Col>
                                    <Col size={1} style={{ justifyContent: 'space-around' }}>
                                        <Text style={styles.time}>2h 30 mins</Text>
                                        <Text style={styles.flaws}></Text>
                                        <Button raised primary text="Feito"
                                            onPress={() => ToastAndroid.show('List item pressed', ToastAndroid.SHORT)}
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
