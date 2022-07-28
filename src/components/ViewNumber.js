import { Component } from 'react';
import { connect } from 'react-redux';

class ViewNumber extends Component {
  render() {
    return <span> {this.props.count} </span>;
  }
}
// 链接
export default connect((state) => ({
  count: state.count,
}))(ViewNumber);
