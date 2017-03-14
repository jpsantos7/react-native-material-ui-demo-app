import { ScrollView, StyleSheet, Text } from 'react-native';
import React, { Component, PropTypes } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Container from '../Container';
import { COLOR, Toolbar } from '../react-native-material-ui';

const styles = StyleSheet.create({
    scanResultsContainer: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    label: {
        color: COLOR.grey600,
        marginBottom: 8,
    },
    valueText: {
        fontSize: 16,
        color: COLOR.grey800,
        marginBottom: 24,
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
                                <Text style={styles.label}>Código do produto</Text>
                                <Text style={styles.valueText}>2046787</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={styles.label}>Nome do produto</Text>
                                <Text style={styles.valueText}>Lovenox 40mg 2 seringas</Text>
                            </Col>
                        </Row>
                        <Row>
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
                                <Text style={styles.valueText}>22, 23, 24, 25, 26, 27, 28, 29</Text>
                            </Col>
                            <Col>
                                <Text style={styles.label}>Nível</Text>
                                <Text style={styles.valueText}>2</Text>
                            </Col>
                        </Row>
                        <Row>
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
                                <Text style={styles.label}>Qt.</Text>
                                <Text style={styles.valueText}>15</Text>
                            </Col>
                            <Col>
                                <Text style={styles.label}>Velocidade</Text>
                                <Text style={styles.valueText}>50</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={styles.label}>Data da última saída</Text>
                                <Text style={styles.valueText}>2016/12/15</Text>
                            </Col>
                        </Row>
                    </Grid>
                </ScrollView>
            </Container>
        );
    }
}
export default ScanResults;