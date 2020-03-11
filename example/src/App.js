// @flow

import React from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'styled-bs-grid';
import ReactMarkdown from "react-markdown";

import './css/App.css';
import './css/Doc.css';

function App() {
    const input = `
                <Container>
                    <Row>
                        <Col sm>
                            One of three columns
                        </Col>
                        <Col sm>
                            One of three columns
                        </Col>
                        <Col sm>
                            One of three columns
                        </Col>
                    </Row>
                </Container>
    
    `;

    return (
        <div className="bd-example-row">

            <div className="bd-example">
                <Container>
                    <Row>
                        <Col sm>
                            One of three columns
                        </Col>
                        <Col sm>
                            One of three columns
                        </Col>
                        <Col sm>
                            One of three columns
                        </Col>
                    </Row>
                </Container>
            </div>

            <ReactMarkdown source={input} />;


            <Container>
                <NavRow>
                    <NavCol col={8}>
                        as (ul > li)
                    </NavCol>
                    <NavCol col={8}>
                        as (ul > li)
                    </NavCol>
                    <NavCol col={8}>
                        as (ul > li)
                    </NavCol>
                </NavRow>
            </Container>
        </div>
    );
}

export default App;


const NavRow = styled(Row).attrs(props  => ({
    'as': 'ul',
}))`
    background-color: chocolate;
    padding: 0;
    opacity: .4;
`;

const NavCol = styled(Col).attrs(props  => ({
    'as': 'li',
}))`
    list-style: none;
    margin: 0;
    text-align: center;
    background-color: cornflowerblue;
 `;
