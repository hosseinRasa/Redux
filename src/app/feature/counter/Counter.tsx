import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { decrement, increment } from "./counterSlice";
import { useGetDataQuery, useUpdateDataQuery } from "../api/apiSlice";

const Counter = () => {
  const { data, error, isLoading } = useGetDataQuery("/users");
  useUpdateDataQuery({
    path: "/users/1",
    body: {
      id: 1,
      userName: "rasa",
    },
  });

  //   useGetDataByParamsQuery({
  //     path: "/news",
  //     params: {id: 1}
  //   });

  console.log(data);
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;
  else if (error) return <p>Error loading users</p>;
  else
    return (
      <>
        {(data as [{ name: string }]).map((d) => (
          <li>{d.name}</li>
        ))}
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </>
    );
};

export default Counter;
