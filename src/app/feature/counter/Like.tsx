 
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks'
import { increment } from './counterSlice';

const Like = () => {
    const count = useAppSelector((state) => state.counter.count)
    const dispatch = useDispatch();
  return (
    <>
    <div>{count}</div>
    <button onClick={() => dispatch(increment())}>******</button>
    </>
  )
}

export default Like