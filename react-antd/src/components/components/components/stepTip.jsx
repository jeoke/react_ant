import { Steps, Icon ,Button , message } from 'antd';
const Step = Steps.Step;
import React from 'react';

    const steps = [{
      title: 'First',
      content: 'First-content',
      icon: 'solution',
    }, {
      title: 'Second',
      content: 'Second-content',
      icon: 'loading',
    }, {
      title: 'Last',
      content: 'Last-content',
      icon: 'smile-o',
    }];
class StepTip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };

  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

 
  render() {
    const current =this.state.current;
    return (
      <div>
        <Steps current={ current }>
           {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          }
        </div>
        </div>
    );
  }
}

export default StepTip;
