import React, {Component} from 'react';
import WeatherGridItem from './WeatherGridItem';
import currentWeatherService from '../services/currentWeatherService';
import { Spin, Row } from 'antd';
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
    this.getWeatherList(0);
  }

  getWeatherList(cityListIndex){
    let that = this;
    let list = this.state.weatherList;

    currentWeatherService(this.props.cityList[cityListIndex], (dataWeather)=>{
      
      if(cityListIndex <= this.props.cityList.length-1){
        list.push(dataWeather);
        that.getWeatherList(cityListIndex + 1);
      }else{
        this.setState({
          weatherList: list
        });
      }

    });

  }

  render(){

    let result = <Spin/>;
    
    if(this.state.weatherList && this.state.weatherList.length > 0){
      result =  this.state.weatherList.map((dataWeather)=>{
          return <WeatherGridItem key={dataWeather.name} dataWeather={dataWeather}/>
      });
    }

    return (
        <div className="grid-container">
            <Row type="flex" justify="start">
                {result}
            </Row>
        </div>
      );
    }
}