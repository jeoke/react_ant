import React from 'react';

class Comment extends React.Component {
   
    constructor(props) {
        super(props);
    }
    
    render(){
    	return (
            <div class='comment-node'>
            	<h3>{this.props.author}</h3>  
                {this.props.children} 
            </div>
    	)
    }
}

class CommentList extends React.Component {

    constructor(props) {
        super(props);
    }
 
    componentDidMount() {
    	
    }

    render() {
    	let commentNodes = this.props.comment.map((comment)=>{
    		let author=comment.author;
    		let content=comment.content;
            return (
            <Comment author={author}>
            <div dangerouslySetInnerHTML = {{ __html : content }}></div>
    	    </Comment>
    	    )
    	});

        return (
           <div className="commentList">
                {commentNodes}  
           </div>  
        );
    }
}

export default CommentList;
