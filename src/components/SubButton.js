import { sub, asyncSub } from '../store/actions';
import { connect } from 'react-redux';

function SubButton(props) {
  const { dispatch, count } = props;
  return (
    <span>
      provider方式调用 <button onClick={() => dispatch(asyncSub(count))}>ASYNC SUB {count}</button>
      <button onClick={() => dispatch(sub())}>SUB 1</button>
    </span>
  );
}

export default connect((state) => ({
  count: state.count,
}))(SubButton);
