import React, {Component, Fragment, useEffect, useContext, useState} from 'react';
import {Row, Col, Container, CardGroup} from "react-bootstrap";
import Error from '../../components/error/Error';
import WeatherCard from '../../components/weather_card/WeatherCard';
import CurrentInfo from '../../components/weather/CurrentInfo';
import CurrentInfoDetail from '../../components/weather/CurrentInfoDetail';
import Loader from '../../components/loader/Loader';
import WeatherWeek from '../weather_week/WeatherWeek';
import {AddressContext} from  '../../context/address/Address';
import {getDayFromDate} from '../../utils/DateHelper';
import {isCityValid, isForecastValid} from '../../utils/validityHelper';
import FetchWeatherData from '../../utils/FetchWeatherHelper';
import API_URL from '../../utils/API';

import * as forecastData from '../../data/metaweather.fiveday.forecast.json';

import './WeatherForecast.scss';

const WeatherForecast = () =>  {

  const addressContext = useContext(AddressContext);
  const [forecast, setForecast] = useState({});
  const [weatherArray, setWeatherArray] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [showContainer, setShowContainer] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);


  const fetchWeatherData = async () => {
    try {
      setIsLoading(true);
      let weatherForecast = await FetchWeatherData(
        addressContext
      );
      // set data in state here
      if (isForecastValid(weatherForecast)) {
        setShowContainer(true);
        setForecast(weatherForecast);
        setWeatherArray(weatherForecast.consolidated_weather);
        setSelectedDay(0);
        setisError(false);
      }

    } catch (error) {
      setisError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(
    () => {
      // add some checks here later
      if (addressContext.latLng) {
        fetchWeatherData();
      }

    }
    , [addressContext.latLng]);

    // add loader component
    return (isLoading ? <Fragment> <Loader message={isCityValid(addressContext.cityName) ? `Loading weather forecast for ${addressContext.cityName}...` : `Loading weather forecast...` } /></Fragment> :
    (isError ? <Error errorMessage={"Something went wrong, weather can't be fetched right now"}/> :
      (showContainer ?
      <div className="forecast-container border  border-dark  p-3 mx-auto">
      <div className = "d-flex flex-row justify-content-md-space-between" >
      <div>
      <CurrentInfo forecast = {forecast} address = {addressContext.address}>
       </CurrentInfo>
        </div>

      </div>
      <div className = "d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-between" >
      <CurrentInfoDetail currentWeather = {weatherArray[selectedDay]}> </CurrentInfoDetail> </div>

      <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row">
      <WeatherWeek forecast = {weatherArray} clickCallback={(index) => {setSelectedDay(index)}}>
      </WeatherWeek>
      </div>
      </div> : null))
    );


}

export default WeatherForecast;
