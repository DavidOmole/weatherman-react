import React, {Component} from 'react';


import SearchInput from './components/search/Search';
import WeatherCard from './components/weather_card/WeatherCard';
import WeatherForecast from './container/weather_forecast/WeatherForecast';
import {AddressContextProvider} from './context/address/Address';
import {UnitContextProvider} from './context/unit/Unit';

import './app.scss';
import {Row, Container, Nav, Jumbotron, Card, ListGroup,ListGroupItem, Col} from "react-bootstrap";



class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
   <Container className="App">
     <AddressContextProvider>
     <Row className="header">

     <Col>
        <section className="d-flex flex-column justify-content-center">
          <SearchInput />
          </section>
        </Col>

     </Row>

     <Row id="content">
         <UnitContextProvider>
         <WeatherForecast></WeatherForecast>
         </UnitContextProvider>
     </Row>
     </AddressContextProvider>
     <Row id="footer">

     </Row>
   </Container>
  );
}
}

export default App;
