import React, { Component, Fragment } from 'react'
import { graphql, QueryRenderer, fetchQuery } from 'react-relay'
import '../App.css'
import environment from '../config/Environment';
import Header from './Header';
import { connect } from 'react-redux';
import { number } from 'prop-types';
import { pageReducer, deleteListItem } from '../action/page-action';
import DeletePostMutation from '../mutations/DeletePostMutation';
import ReactPaginate from 'react-paginate';

@connect(state => ({
  pageList: state.pageReducer.pageList,
}))

class ListPage extends Component {
  static propTypes = {
    pageList: number,    
    perPage: number.isRequired
  };

  state = {
    pageCount: 0,
    selected: 0
  };

  query = graphql`
  query ListPageQuery {
      allPosts(orderBy: createdAt_DESC) {
        id
        title
        text
      }
    }
  `;

  _handleDelete = (id) => {
    DeletePostMutation(id,  () => this.props.dispatch(deleteListItem(id)));
  };


  componentDidMount() {
    
    const variables = {
      // after: 'cjw0d8dsd097y0183u6b80p9c',
      // first: 10
    };
    fetchQuery(environment, this.query)
    .then(data => {
      this.setState({pageCount: Math.ceil(data.allPosts.length/10)})
      this.props.dispatch(pageReducer(data.allPosts)) 
    });
  } 

  handlePageClick = data => {
    this.setState({selected: data.selected});
  };

  render() {
    const { pageList } = this.props;
    return (
      <Fragment>  
      <Header/>
      <div className="list">
      {pageList.length &&
      <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      }
      {/* <table>
        <tr>
            <th>User Id</th>
            
            <th>User Title</th>
            <th>User Text</th>
        </tr>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ListPageQuery {
              allPosts {
                id
                title
                text
              }
            }
          `}
        variables={{
          pageId: '1'
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          } else {
            this.props.dispatch(pageReducer(props.allPosts)) 
          }
          return props.allPosts.map((node)=>(
          <tr>
            <td>{node.id}</td>
            <td>{node.title}</td>
            <td>{node.text} </td>
          </tr>))
        }}
      />
      </table> */}
        <table>
          <tr>
              <th>User Id</th>              
              <th>User Title</th>
              <th>User Text</th>
              <th>Action</th>
          </tr>
          {pageList.length && pageList.slice(this.state.selected*10, (this.state.selected + 1)*10).map((node)=>(
            <tr>
              <td>{node.id}</td>
              <td>{node.title}</td>
              <td>{node.text} </td>
              <td>
                <button className="red f6 pointer dim" onClick={(id) => this._handleDelete(node.id)}>
                Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      </Fragment>
    )
  }
}

export default ListPage;