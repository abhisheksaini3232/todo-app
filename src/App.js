import logo from "./logo.svg";
import "./App.css";

function App() { 
  return (
    <>
      <div className="inputDiv">
        <label htmlFor="todo">To-do</label>
        <input type="text" id="todo" name="todo"></input>
        <button>Submit</button>
      </div>
      <div>
        <ul>
          <li>
            Take a bath
            <button backgroundColor="red">Pending</button>
            <button backgroundColor="blue">Edit</button>
            <button backgroundColor="yellow">Delete</button>
          </li>
          <li>
            Beat Vivek
            <button backgroundColor="red">Pending</button>
            <button backgroundColor="blue">Edit</button>
            <button backgroundColor="yellow">Delete</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App ;
