import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 30px;
`;
function Form() {
  const [users, setUsers] = useState([{ name: "", amount: "" }]);

  const handleAddFields = () => {
    const values = [...users];
    values.push({ name: "", amount: "" });
    setUsers(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...users];
    values.splice(index, 1);
    setUsers(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...users];
    if (event.target.name === "name") {
      values[index].name = event.target.value;
    } else {
      values[index].amount = event.target.value;
    }

    setUsers(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users", users);
  };

  return (
    <Wrapper>
      <h1>Split Bill</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {users.map((inputField, index) => (
            <React.Fragment key={`${inputField}~${index}`}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={inputField.name}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="amount"
                  value={inputField.amount}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div>
                <button type="button" onClick={() => handleRemoveFields(index)}>
                  -
                </button>
                <button type="button" onClick={() => handleAddFields()}>
                  +
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div>
          <button type="submit" onSubmit={handleSubmit}>
            Save
          </button>
        </div>
        <br />
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </form>
    </Wrapper>
  );
}

export default Form;
