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

function Debt(props) {
  const { note, bill } = props.data;
  return (
    <div>
      {bill &&
        bill.map(
          (item, i) =>
            item.from === "Akash" && (
              <Wrapper key={i}>
                <div className="row">
                  <div className="img-container">
                    <img
                      src="https://i.pinimg.com/564x/e1/b9/1a/e1b91af0d34ae6c4b82a4402c1505617.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="content">
                    <p>{`You owe ${item.amount} to ${item.to} for ${note} `}</p>
                    <span>02 Nov</span>
                  </div>
                </div>
              </Wrapper>
            )
        )}
    </div>
  );
}

export default Debt;
