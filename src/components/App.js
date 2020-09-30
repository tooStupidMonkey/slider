import React, { Component } from "react";
import styled from 'styled-components';
import {Row, Col} from 'antd';
import SlideshowPlayer from './parts/SlideshowPlayer';
import Timeline from './parts/Timeline';
import ImagesLibrary from './parts/ImagesLibrary';

const MainWrap = styled.div`
  max-width: 1200px;
  width: 70%;
  margin: auto;
  padding: 40px 0;
`;

const ActiveElement = React.createContext({});

class App extends Component {
  render() {
        return (
          <MainWrap>
            <h1>Slider</h1>
            <Row  align="bottom">
              <Col span={10}>
                <SlideshowPlayer />
              </Col>
              <Col span={14}>
                <ImagesLibrary />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Timeline />
              </Col>
            </Row>
          </MainWrap>
        );
    }
}

export default App;