import { add, asyncAdd } from '../store/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function AddButton() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <span>
      <button onClick={() => dispatch(add(1))}>ADD {1}</button>
      <button onClick={() => dispatch(asyncAdd(count))}>ASUNC ADD {count}</button> hooks方式调用
    </span>
  );
}

export default AddButton;
