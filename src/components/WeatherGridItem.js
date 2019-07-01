import React,{Component} from 'react';
import { Icon, Row, Col } from 'antd';
import roundNumber from '../util/roundNumber';

import "antd/dist/antd.css";
import './WeatherGridItem.css';

export default class WeatherGridItem extends Component {

    constructor(props){
        super(props);

        const {dataWeather} = props;

        this.state = {
            dataWeather : dataWeather
        };
    }

    render(){
        return(
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <div>
                    <Row>
                        <Col span={4}>
                            <span className="item-text">
                                <Icon type="arrow-down"/> {roundNumber(this.state.dataWeather.main.temp_min)}
                            </span>
                        </Col>
                        <Col span={4}>
                            <span className="item-text">
                                <Icon type="arrow-up"/> {roundNumber(this.state.dataWeather.main.temp_max)}
                            </span>
                        </Col>
                        <Col span={12}>
                            <span className="item-text">
                                {this.state.dataWeather.name}
                            </span>
                        </Col>
                    </Row>
                </div> 
            </Col>
        );
    }
}