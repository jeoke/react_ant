import React from 'react';
import ReactDOM from 'react-dom';


function Ball(x,y,radius){
      this.x = x;
      this.y = y;
      this.radius = radius;

      this.originX = x;
      this.originY = y;

      this.speedX = 5;
      this.speedY = 5;

      this.drawMe = function(ctx){
      	ctx.beginPath();
      	ctx.strokeStyle = '#000';
      	ctx.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, 2 * Math.PI);
        ctx.stroke() 
      	ctx.closePath();
      }

      this.move = function(){
      	this.x += this.speedX;
      	this.y += this.speedY;
      }
}





class BallMove extends React.Component{
    	constructor(props) {
    		super(props);
           let ballRadius = Math.floor(this.props.width/60);
           let ballX = Math.floor(this.props.width/2 - ballRadius);
           let ball  = new Ball(ballX,40,ballRadius);
               this.state={
                   ball:ball
               };  
    	}
   
        clear(){
              this.canvas.getContext('2d').clearRect(0,0,this.props.width,this.props.height);
        };

        refreshBall(){
                this.clear();
                this.state.ball.move();
              let  ballX = this.state.ball.x;
              let  ballY = this.state.ball.y;
                if(ballX < 0){
                  this.state.ball.x = 0;
                  this.state.ball.speedX *= -1;
                }
                if (ballY < 0) {
                  this.state.ball.y = 0;
                  this.state.ball.speedY *= -1;
                }
                if (ballX + 2*this.state.ball.radius > this.props.width) {
                  this.state.ball.x = this.props.width - 2*this.state.ball.radius;
                  this.state.ball.speedX *=-1;
                }
                if (ballY + 2*this.state.ball.radius > this.props.height) {
                  this.state.ball.y = this.props.height - 2*this.state.ball.radius;
                  this.state.ball.speedY *=-1;    
                }
                this.state.ball.drawMe(this.canvas.getContext('2d'));
        };      
         
    componentDidMount() { 

        this.timer = setInterval(()=>{ 
            this.refreshBall();
        },160);

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    	render() {
    		return (
    	        <canvas ref={ (node) => { this.canvas = node } } 
                        style = {{ zIndex : 2 , position:'absolute' }}
                        width={this.props.width}
                        height={this.props.height}
    	        ></canvas>
    		);
    	}
}
export default BallMove;