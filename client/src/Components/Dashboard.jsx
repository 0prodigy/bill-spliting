import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getHistory } from "../Redux/actions";
import Form from "./Form";
import Trasactions from "./Trasactions";
import Wallet from "./Wallet";
import Debt from "./Debt";

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
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getHistory());
    //eslint ignore next-line
  }, []);
  return (
    <Wrapper>
      <div>
        <Wallet />
        <h3>Your Debt</h3>
        {state.bills.length > 0 &&
          state.bills[0].map((item, i) => <Debt key={i} data={item} />)}
      </div>
      <Form />
      <div>
        <h3>History</h3>
        {state.bills.length > 0 &&
          state.bills[0].map((item, i) => <Trasactions key={i} data={item} />)}
      </div>
    </Wrapper>
  );
}

export default Dashboard;
