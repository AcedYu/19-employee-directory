import React from "react";
import employeeArray from "./employees.json";

const style = {
  div: {
    height: "64px"
  }
}

const EmployeeList = () => {
  const [employees, setEmployees] = React.useState([]);
  const [formObject, setFormObject] = React.useState({});

  React.useEffect(() => {
    setEmployees(employeeArray);
  }, [])

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    setEmployees(employeeArray.filter(employee => {
      return employee.first.toLowerCase().includes(value.toLowerCase()) || employee.last.toLowerCase().includes(value.toLowerCase());
    }))
  };

  return (
    <div className="container">

      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
          name="search"
          placeholder="Filter by Name"
          onChange={handleInputChange}
        />
      </div>

      <table className="table">
        <thead>
          <th scope="col">id</th>
          <th scope="col">Photo</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
        </thead>
        <tbody>
          {
            employees.map(employee => (
              <tr>
                <td>
                  <h2>{employee.id}</h2>
                </td>
                <td>
                  <img
                    className="img-fluid img-thumbnail"
                    width="150"
                    height="150"
                    src={employee.image}
                    alt="Failed to load"
                  />
                </td>
                <td>
                  <h2>{employee.first}</h2>
                </td>
                <td>
                  <h2>{employee.last}</h2>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div style={style.div}></div>
    </div>
  )
}

export default EmployeeList;