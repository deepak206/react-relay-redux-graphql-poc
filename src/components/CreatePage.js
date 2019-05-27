import React, {Component, Fragment} from 'react';
import CreatePostMutation from '../mutations/CreatePostMutation';
import Header from './Header';
import { connect } from 'react-redux';

@connect(state => ({
  pageList: state.pageReducer.pageList,
}))

class CreatePage extends Component {

  state = {
    title: '',
    text: '',
  }

  render () {
    const { pageList } = this.props;
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
                <table>
                <tr>
                    <th>User Id</th>
                    
                    <th>User Title</th>
                    <th>User Text</th>
                </tr>
                {pageList.length && pageList.map((node)=>(
              <tr>
                <td>{node.id}</td>
                <td>{node.title}</td>
                <td>{node.text} </td>
                    </tr>))}
                </table>
        </div>    

        
        </Fragment>     
    )
  }

  _handlePost = () => {
    const {title, text} = this.state
    CreatePostMutation(title, text,  () => this.props.history.replace('/ListPage'))
  }

}

export default CreatePage;