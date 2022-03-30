import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAsync } from "../src/redux/actions/user";

function App() {
  const dispatch = useDispatch();

  const { user } = useSelector((s) => s.userReducer);

  useEffect(() => {
    console.log(user)
    dispatch(fetchUserAsync());
  }, []);

  return (
    <div className="App">
      <div className="container">
      <button className="btn btn-primary">Edit</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((us) => {
            return (
              <tr>
                <td>{us.first_name}</td>
                <td>{us.last_name}</td>
                <td>{us.email}</td>
                <td>
                  <button className="btn btn-secondary mr-2">Edit</button>
                  <button className="btn btn-danger ml-2">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      </div>
    </div>
  );
}

export default App;
