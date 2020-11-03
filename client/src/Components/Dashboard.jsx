import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Trasactions from "./Trasactions";
import Wallet from "./Wallet";

const Wrapper = styled.div`
  background: #f6f7fb;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  > div {
    flex: 1;
    margin: 0 2px;
  }
  > div:nth-child(2) {
    flex: 2;
  }
  > div:nth-child(3) {
    background: #fff;
    border-radius: 20px;
    padding: 20px;
  }
`;
function Dashboard() {
  return (
    <Wrapper>
      <div>
        <Wallet />
        <h3>Your Debt</h3>
        <Trasactions />
      </div>
      <Form />
      <div>
        <h3>History</h3>
        <Trasactions />
        <Trasactions />
        <Trasactions />
        <Trasactions />
        <Trasactions />
        <Trasactions />
      </div>
    </Wrapper>
  );
}

export default Dashboard;
