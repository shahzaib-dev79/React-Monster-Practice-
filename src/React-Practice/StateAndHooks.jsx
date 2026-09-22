import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment +</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement -</button>
    </div>
  );
}

export default Counter;

export function TodoList() {
  const [data, setData] = useState({
    name: "",
    priority: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTodo((prev) => [...prev, data]);
    setData({ name: "", priority: "" });
  };
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>

        <input type="text" name="name" onChange={changeHandler} />
        <label htmlFor="priority">Priority</label>
        <input type="text" name="priority" onChange={changeHandler} />
        <button type="submit">Submit</button>
      </form>

      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((myData, idx) => (
              <tr key={idx}>
                <td>{myData.name}</td>
                <td>{myData.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Profile() {
  const [data, setData] = useState({
    name: "",
    priority: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setProfile((prev) => [...prev, data]);
    setData({ name: "", age: "" });
  };
  const [profile, setProfile] = useState({});

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>

        <input type="text" name="name" onChange={changeHandler} />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" onChange={changeHandler} />
        <button type="submit">Submit</button>
      </form>

      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {profile.map((myData, idx) => (
              <tr key={idx}>
                <td>{myData.name}</td>
                <td>{myData.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
