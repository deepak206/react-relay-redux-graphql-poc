import React, {Component, Fragment} from 'react';
import CreatePostMutation from '../mutations/CreatePostMutation';
import Header from './Header';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

@connect(state => ({
  pageList: state.pageReducer.pageList,
}))

class CreatePage extends Component {
  state = {
    title: '',
    text: '',
    pageCount: 0,
    selected: 0
  }

  handlePageClick = data => {
    this.setState({selected: data.selected});
  };

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
                {pageList.length &&
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageList.length/10}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                  />
                }
                <table>
                  <tr>
                      <th>User Id</th>
                      
                      <th>User Title</th>
                      <th>User Text</th>
                  </tr>
                  {pageList.length && pageList.slice(this.state.selected*10, (this.state.selected + 1)*10).map((node)=>(
                    <tr>
                      <td>{node.id}</td>
                      <td>{node.title}</td>
                      <td>{node.text} </td>
                    </tr>
                  ))}
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