import React, {Component} from 'react';
import WeatherGridItem from './WeatherGridItem';
import currentWeatherService from '../services/currentWeatherService';
import { Row } from 'antd';
import "antd/dist/antd.css";

import './WeatherGrid.css'

export default class WeatherGrid extends Component {

  constructor(props){
      super(props);

      this.state = {
        weatherList : []
      };
  }

  componentDidMount(){
    for(let cityName of this.props.cityList){
      currentWeatherService(cityName, (dataWeather)=>{
          
        let list = this.state.weatherList;
        list.push(dataWeather);
        
        this.setState({
            weatherList: list
        });
      });
    }
  }

  render(){

    const columns =  this.state.weatherList.map((dataWeather)=>{
        return <WeatherGridItem key={dataWeather.name} dataWeather={dataWeather}/>
    });

    return (
        <div className="grid-container">
            <Row type="flex" justify="start">
                {columns}
            </Row>
        </div>
      );
    }
}