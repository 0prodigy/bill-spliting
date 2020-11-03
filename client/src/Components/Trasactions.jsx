import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .row {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  padding: 10px;
  border-radius: 10px;
  background: #fff;

  .img-container img {
    width: 60px;
    border-radius: 50%;
  }
  &:hover {
    box-shadow: -4px 0px 5px #608c5f;
  }
  margin-bottom: 4px;
`;

function Trasactions() {
  return (
    <Wrapper>
      <div className="row">
        <div className="img-container">
          <img
            src="https://i.pinimg.com/564x/e1/b9/1a/e1b91af0d34ae6c4b82a4402c1505617.jpg"
            alt="img"
          />
        </div>
        <div className="content">
          <p>you owe 50 rupee to him</p>
          <span>24 sep</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default Trasactions;
