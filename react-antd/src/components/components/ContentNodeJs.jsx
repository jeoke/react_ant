import React from 'react';
import { Row, Col } from 'antd';
import ImgCard from './components/ImgCard.jsx';
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';
class ContentNodeJs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <BreacdcrumbCustom first='NodeJS'/>
          <Row>
            <Col span={6} offset={2}><ImgCard /></Col>
            <Col span={6} offset={1}><ImgCard/></Col>
            <Col span={6} offset={1}><ImgCard/></Col>
          </Row>
          <Row>
            <Col span={6} offset={2}><ImgCard/></Col>
            <Col span={6} offset={1}><ImgCard/></Col>
            <Col span={6} offset={1}><ImgCard/></Col>
          </Row>
          <Row>
            <Col span={6} offset={2}><ImgCard/></Col>
            <Col span={6} offset={1}><ImgCard/></Col>
            <Col span={6} offset={1}><ImgCard/></Col>
          </Row>
        </div>
    );
  }
}

export default ContentNodeJs;

  