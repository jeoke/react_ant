import { Card } from 'antd';
const { Meta } = Card;

import React from 'react';


class ImgCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img src=''/>}
      >
        <Meta
         title={this.props.title}
         description={this.props.description}
        />
      </Card>
    );
  }
}

export default ImgCard;

  