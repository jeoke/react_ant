import React from 'react';
import axios from 'axios';
import './styles/peotry.css';
import BreacdcrumbCustom from './components/Breacdcrumb.jsx';
const writeChars = (that,char,remark) => new Promise((resolve) => {
	 setTimeout(function() {
	 if(remark === 'title'){
	 	char = that.state.title + char ;
	 that.setState({
	 	title: char
	 });
	 }else{
	 	if(char === '，'||char === '？'||char ==='！'||char ==='。'||char ==='；'){
	 		char = char + ' <br/> ';
	 	}

	    that.content.scrollTop = that.content.scrollHeight;

  	 char = that.state.content + char;
		 that.setState({
	 		content: char
		 })
	    }
	    resolve();
	},170);
});

const writeTo = async(that,text,index,remark) => {
      let speed = 1;
      let char =  text.slice(index,index + speed);
      index += speed;
      if(index > text.length){
      	return;
      }
      await writeChars(that,char,remark);
      await writeTo(that,text,index,remark);
}

class Poetry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	title:'',
        	content:''
        }
    }

    componentDidMount() {
    	axios.get('/v1/poetry/article',{
    		 params: {
    		     article:'poetry'
    		 }
    	}).then((res) => {
              if (res.data) {
               (async (that,data) => {
               	await writeTo(that,data[0].title,0,'title');
               	await writeTo(that,data[0].content,0,'content');
               })(this,res.data);
              }
    	});
    }

    render() {
        return (
        	<div>
        	<BreacdcrumbCustom first='peotry'/>
              <div  ref={(node)=>{this.content=node}} className='peotry'>
            	<h3>{this.state.title}</h3>
             	<div dangerouslySetInnerHTML = {{ __html : this.state.content }}></div>
              </div>
            </div>
        );
    }
}

export default Poetry;
