import React, { Component } from 'react';
import { Icon, Button, Card, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { removeCity } from '../actions';
import { bindActionCreators } from 'redux';
import capitalizeFirtsLetter from '../util/capitalizeFirtsLetter';
import roundNumber from '../util/roundNumber';

import './WeatherCard.css';


class WeatherCard extends Component {

    render() {

        let { cityForecast, removeCity } = this.props;
        let firstForeCast = cityForecast.cityForecastData.list[0];

        return (
            <Col className="gutter-row">
                <Card size="small"
                    title={capitalizeFirtsLetter(cityForecast.cityName)}
                    extra={<Button onClick={() => {
                        removeCity(cityForecast.cityName);
                    }
                    }
                        icon="close"></Button>} style={{ width: 300 }}>

                    <div>
                        <Row>
                            <span className="temp-text">
                                {roundNumber(firstForeCast.main.temp)}°C {capitalizeFirtsLetter(firstForeCast.weather[0].description)}
                            </span>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <div>
                                    <Row>
                                        <span className="text2"><Icon type="arrow-down" />{roundNumber(firstForeCast.main.temp_min)}°C <Icon type="arrow-up" />{roundNumber(firstForeCast.main.temp_max)}°C</span>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={10}>
                                <div>
                                    <Row>
                                        <span className="text1"> Sensação </span> <span className="text2">{roundNumber(firstForeCast.main.temp_max)}°C</span>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <div>
                                    <Row>
                                        <span className="text1">Vento</span> <span className="text2">{firstForeCast.wind.speed}Km/h</span>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={10}>
                                <div>
                                    <Row>
                                        <span className="text1">Umidade</span> <span className="text2">{firstForeCast.main.humidity}%</span>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Card>
            </Col>
        );
    }
}

const mapStateToProps = store => ({
    citysToCard: store.searchReducer.citysToCard
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ removeCity }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);