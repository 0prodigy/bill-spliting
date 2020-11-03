import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #028a02;
  color: #fff;
  max-width: 330px;
  padding: 10px;
  text-align: center;
  border-radius: 30px;
  box-shadow: -2px 0px 5px #2a3824;
  .user-card {
    padding: 10px;
    .img-container img {
      width: 80px;
      border-radius: 50px;
      border: 1px solid #fbfbfb;
      padding: 5px;
    }
    h3 {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
  .amount-card {
    display: felx;
    justify-content: space-around;
    color: #333;
    font-size: 2rem;

    span {
      font-size: 15px;
      color: #fcfbfc;
    }
  }
`;

function Wallet() {
  return (
    <Wrapper>
      <h1>Wallet</h1>
      <div className="user-card">
        <div className="img-container">
          <img
            src="https://i.pinimg.com/564x/e1/b9/1a/e1b91af0d34ae6c4b82a4402c1505617.jpg"
            alt="user"
          />
        </div>
        <h3>Akash</h3>
      </div>
      <div className="amount-card">
        <div className="currency">
          <p>RUPEE</p>
          <span>Market Value</span>
        </div>
        <div className="amount">
          <p>$ 505005</p>
          <span>Total Balance</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default Wallet;
