import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Trasactions from "./Trasactions";
import Wallet from "./Wallet";

const Wrapper = styled.div`
  background: #f6f7fb;
`;
function Dashboard() {
  return (
    <Wrapper>
      <Wallet />
      <Trasactions />
      <Form />
    </Wrapper>
  );
}

export default Dashboard;
