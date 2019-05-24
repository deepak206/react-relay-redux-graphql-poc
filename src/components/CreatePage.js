import React, {Component, Fragment} from 'react';
import CreatePostMutation from '../mutations/CreatePostMutation';
import Header from './Header';

class CreatePage extends Component {

  state = {
    title: '',
    text: '',
  }

  render () {
    return (
      <Fragment>
      <Header/> 
          <div className="container">
          <label for="fname">Title</label>
                <input
                 id="fname"
                value={this.state.title}
                placeholder='Title'
                onChange={(e) => this.setState({title: e.target.value})}
                />
                 <label for="lname">Text</label>
                <input
                 id="lname"
                value={this.state.text}
                placeholder='text'
                onChange={(e) => this.setState({text: e.target.value})}
                />
                
                <button className='button' onClick={() => this._handlePost()}>Post</button>
                <div style={{textAlign: "center", color: "red"}}>
                </div>
        </div>    

        
        </Fragment>     
    )
  }

  _handlePost = () => {
    const {title, text} = this.state
    CreatePostMutation(title, text,  () => this.props.history.replace('/'))
  }

}

export default CreatePage;