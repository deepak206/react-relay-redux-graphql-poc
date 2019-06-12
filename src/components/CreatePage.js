import React, {Component, Fragment} from 'react';
import CreatePostMutation from '../mutations/CreatePostMutation';
import Header from './Header';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

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
        <Header />
        <div className="container">
          <label htmlFor="fname">Title</label>
          <input
            id="fname"
            value={this.state.title}
            placeholder="Title"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <label htmlFor="lname">Text</label>
          <input
            id="lname"
            value={this.state.text}
            placeholder="text"
            onChange={e => this.setState({ text: e.target.value })}
          />
          <button className="button" onClick={() => this._handlePost()}>
            Post
          </button>
          <div style={{ textAlign: "center", color: "red" }}></div>
          { pageList.length > 0 && (
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageList.length / 10}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          )}
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

  _handlePost = () => {
    const {title, text} = this.state
    CreatePostMutation(title, text,  () => this.props.history.replace('/ListPage'))
  }
}

const mapStateToProps = ({
  pageReducer: {
    pageList,
  },
}) => ({
  pageList,
});

export default connect(mapStateToProps)(CreatePage);
