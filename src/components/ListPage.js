import React, { Component, Fragment } from 'react'
import { graphql, QueryRenderer, fetchQuery } from 'react-relay'
import '../App.css'
import environment from '../config/Environment';
import Header from './Header';
import { connect } from 'react-redux';
import { number } from 'prop-types';
import { pageReducer, deleteListItem } from '../action/page-action';
import DeletePostMutation from '../mutations/DeletePostMutation';

@connect(state => ({
  pageList: state.pageReducer.pageList,
}))

class ListPage extends Component {
  static propTypes = {
    pageList: number,
  }

  
  query = graphql`
  query ListPageQuery {
      allPosts {
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
    fetchQuery(environment, this.query)
    .then(data => {
      this.props.dispatch(pageReducer(data.allPosts)) 
    });
  } 

  render() {
    const { pageList } = this.props;
    return (
      <Fragment>  
      <Header/> 
      <div className="list">
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
          {pageList.length && pageList.map((node)=>(
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