// @flow

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Col from './lib/components/Col/Col';
import Container from './lib/components/Container/Container';
import Row from './lib/components/Row/Row';

function App() {
    return (
        <div className="App">
            <Container fluid>
                <Row noGutters>
                    <Col col={24} lg={6} xl={12}>
                        <div style={{background: '#000'}}>Background</div>
                    </Col>
                    <Col col={24} lg={6} xl={12}>
                        <div style={{background: 'red'}}>Background</div>
                    </Col>
                    <Col col={24} lg={6} xl={12}>
                        <div style={{background: 'blue'}}>Background</div>
                    </Col>
                    <Col col={24} lg={6} xl={12}>
                        <div style={{background: 'green'}}>Background</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
