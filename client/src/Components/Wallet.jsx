import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #00a371;
  color: #e6f4ef;
  width: 350px;
  height: 300px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 30px;
  box-shadow: 1px 10px 5px #86b1a4;
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
    display: flex;
    justify-content: space-around;
    color: #333;
    font-size: 1.2rem;
    font-weight: 700;

    span {
      font-size: 13px;
      color: #fcfbfc;
      font-weight: 100;
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
