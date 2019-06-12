import React, { Component, Fragment } from 'react'
import { graphql, fetchQuery } from 'react-relay'
import '../App.css'
import environment from '../config/Environment';
import Header from './Header';
import { connect } from 'react-redux';
import { array } from 'prop-types';
import { pageReducer, deleteListItem } from '../action/page-action';
import DeletePostMutation from '../mutations/DeletePostMutation';
import ReactPaginate from 'react-paginate';

class ListPage extends Component {
  static propTypes = {
    pageList: array
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
    const salesItem = pageList.length && pageList.length ? (
      pageList.map((node) => (
        <tr key={node.id}>
          <td>{ node.id }</td>
          <td>{ node.title }</td>
          <td>{ node.text }</td>
        </tr>
      ))
    ) : (
      <tr key={'NotFound'}>
        <td colSpan="3" align="center">
            No Record found
        </td>
      </tr>
    )

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
          <thead>
            <tr>
              <th>User Id</th>
              <th>User Title</th>
              <th>User Text</th>
            </tr>
          </thead>
          <tbody>
            { salesItem }
          </tbody>
        </table>
      </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({
  pageReducer: {
    pageList,
  },
}) => ({
  pageList,
});

export default connect(mapStateToProps)(ListPage);
