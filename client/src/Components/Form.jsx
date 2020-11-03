import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 30px;
  padding: 20px;
  h1 {
    font-size: 3rem;
    marign-bottom: 2rem;
  }

  input {
    padding: 10px;
    border: 1px solid #cfd2c9cc;
    border-radius: 4px;
    display: inline-block;
    margin-bottom: 1rem;
  }

  .total-amount input {
    height: 60px;
    width: 260px;
    margin: 2rem auto;
    display: block;
  }

  .input-group {
    display: flex;
    justify-content: space-around;
  }

  .button-group {
    display: flex;
    flex-flow: column;
    button {
      display: inline-block;
      padding: 2px 10px;
      box-sizzing: border-box;
      color: #fff;
      background: #00a371;
      border: none;
      border-radius: 2px;
    }
    button:nth-child(1) {
      background: #f10000;
    }
  }

  .btn-split {
    padding: 15px 60px;
    display: block;
    margin: 2rem auto;
    background: #00a371;
    color: #e6f4ef;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;
function Form() {
  const [users, setUsers] = useState([{ name: "", amount: "" }]);
  const [total, setTotal] = useState("");

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
        <div className="total-amount">
          <input
            type="text"
            placeholder="Total amount"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
        </div>
        <div className="form-group">
          <div className="input-group">
            <h3>Name</h3>
            <h3>Amount</h3>
          </div>
          {users.map((inputField, index) => (
            <div className="input-group" key={`${inputField}~${index}`}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={inputField.name}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="amount"
                  placeholder="Contribution"
                  value={inputField.amount}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="button-group">
                <button type="button" onClick={() => handleRemoveFields(index)}>
                  -
                </button>
                <button type="button" onClick={() => handleAddFields()}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button type="submit" className="btn-split" onSubmit={handleSubmit}>
            Split
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Form;
