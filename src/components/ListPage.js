import React, { Component, Fragment } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import '../App.css'
import environment from '../config/Environment';
import Header from './Header';
import { connect } from 'react-redux';
import { number } from 'prop-types';
import { pageReducer } from '../action/page-action';

@connect(state => ({
  pageList: state.pageReducer.pageList,
}))

class ListPage extends Component {
  static propTypes = {
    pageList: number,
  }

  render() {
    const { pageList } = this.props;
    console.log(pageList);
    return (
        <Fragment>  
      <Header/> 
      <div className="list">
      <table>
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
      </table>
      </div>
      </Fragment>
    )
  }
}

export default ListPage;