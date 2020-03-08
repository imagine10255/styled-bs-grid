// @flow

import React from 'react';
import './App.css';
import {Col, Row, Container} from './lib';

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col lg={6} xl={12}>
                        <div style={{background: '#000'}}>Background</div>
                    </Col>
                    <Col lg={6} xl={12}>
                        <div style={{background: 'red'}}>Background</div>
                    </Col>
                    <Col lg={6} xl={12}>
                        <div style={{background: 'blue'}}>Background</div>
                    </Col>
                    <Col lg={6} xl={12}>
                        <div style={{background: 'green'}}>Background</div>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row noGutters>
                    <Col col lg={6} xl={12}>
                        <div style={{background: '#000'}}>Background</div>
                    </Col>
                    <Col col lg={6} xl={12}>
                        <div style={{background: 'red'}}>Background</div>
                    </Col>
                    <Col col lg={6} xl={12}>
                        <div style={{background: 'blue'}}>Background</div>
                    </Col>
                    <Col col lg={6} xl={12}>
                        <div style={{background: 'green'}}>Background</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
