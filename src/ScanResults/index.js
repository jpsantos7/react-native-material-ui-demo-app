import { ScrollView, StyleSheet, Text } from 'react-native';
import React, { Component, PropTypes } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Container from '../Container';
import { COLOR, Toolbar, Divider } from '../react-native-material-ui';

const styles = StyleSheet.create({
    scanResultsContainer: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    label: {
        fontSize: 16,
        color: COLOR.grey600,
        marginBottom: 8,
    },
    valueText: {
        fontSize: 20,
        color: COLOR.grey800,
        marginBottom: 24,
        paddingRight: 4,
    },
    dividerMargin: {
        marginTop: 16,
    },
    small: {
        fontSize: 14,
    },
});

class ScanResults extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired,
        route: PropTypes.object.isRequired,
    };
    static contextTypes = {
        uiTheme: PropTypes.object.isRequired,
    };
    render() {
        const { primaryColor } = this.context.uiTheme.palette;
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />
                <ScrollView>
                    <Grid style={styles.scanResultsContainer}>
                        <Row>
                            <Col>
                                <Text style={styles.valueText}>2046787</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={styles.valueText}>Lovenox 40mg 2 seringas</Text>
                            </Col>
                        </Row>
                        <Divider />
                        <Row style={styles.dividerMargin}>
                            <Col>
                                <Text style={styles.label}>Área</Text>
                                <Text style={styles.valueText}>TDL</Text>
                            </Col>
                            <Col>
                                <Text style={styles.label}>Sector</Text>
                                <Text style={styles.valueText}>2</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={styles.label}>Canais</Text>
                                <Text style={styles.valueText}>22, 23</Text>
                            </Col>
                            <Col>
                                <Text style={styles.label}>Nível</Text>
                                <Text style={styles.valueText}>2</Text>
                            </Col>
                        </Row>
                        <Divider />
                        <Row style={styles.dividerMargin}>
                            <Col>
                                <Text style={styles.label}>Quantidade</Text>
                                <Text style={styles.valueText}>31</Text>
                            </Col>
                            <Col>
                                <Text style={styles.label}>Pendente</Text>
                                <Text style={styles.valueText}>2</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={styles.label}>Última Saída</Text>
                                <Text style={styles.valueText}>2016/12/15</Text>
                            </Col>
                        </Row>
                        <Divider />
                        <Row style={styles.dividerMargin}>
                            <Col>
                                <Text style={styles.label}>Quantidade Máxima</Text>
                                <Text style={styles.valueText}>15</Text>
                            </Col>
                            <Col>
                                <Text style={styles.label}>Velocidade</Text>
                                <Text style={styles.valueText}>50</Text>
                            </Col>
                        </Row>
                    </Grid>
                </ScrollView>
            </Container>
        );
    }
}
export default ScanResults;