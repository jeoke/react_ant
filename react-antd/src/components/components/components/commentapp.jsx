import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';


// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';
import './styles/commentapp.css';

class CommentApp extends React.Component {
  
  constructor(props) {
      super(props);
  }

  render () {

    const editorProps = {
      height: 200,
      contentFormat: 'html',
      initialContent: '',
      excludeControls:['media','italic','subscript','superscript','text-color','clear','strike-through','letter-spacing','split','hr'],
      onChange: this.handleChange,
      onRawChange: this.handleRawChange
    }

    return (
      <div className='comment'>
        <BraftEditor {...editorProps} ref={(node) => this.editorInstance = node}/>
        <Button type="primary" ghost className='comment-button' onClick={this.props.addProposal.bind(this)}>提交建议</Button>
      </div>
    )

  }


}
export default CommentApp;