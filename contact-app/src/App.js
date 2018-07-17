import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              Header
            </Col>            
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={6}>
              Left Pane
            </Col>
            <Col xs={6} md={6}>
              Content Window
            </Col>

          </Row>

          <Row className="show-grid">
            <Col md={12} xs={12}>
              Footer
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default App;
