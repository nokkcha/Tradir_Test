import React from "react";
import { Table } from "@material-ui/core";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 200px;
  margin-right: 100px;
  margin-left: 100px;
`;

const CartTable = styled(Table)`
  height: 200px;
  font-size: 24px;
`;

const Header = styled.tr`
  font-size: 40px;
  height: 160px;
`;

const Section = styled.tr`
  height: 80px;
  font-size: 30px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 50px;
  padding: 10px;
`;

const Delete = styled.button`
  border: none;
  background-color: transparent;
  font-size: 36px;

  &:hover {
    font-weight: bold;
  }
`;
const Cart = (props) => {
  return (
    <Container>
      <CartTable>
        <Header>
          <th>#</th>
          <th>제품 이미지</th>
          <th>맥주 이름</th>
          <th>수량</th>
          <th>변경</th>
        </Header>

        {props.state.map((a, i) => {
          return (
            <Section key={i}>
              <th>{i + 1}</th>
              <th>
                <img src={a.image} style={{ height: 250 }} />
              </th>
              <th>{a.name}</th>
              <th>
                <>
                  <Button
                    onClick={() => {
                      props.dispatch({ type: "MINUS_BEER", idx: i });
                    }}
                  >
                    -
                  </Button>

                  {a.quan}

                  <Button
                    onClick={() => {
                      props.dispatch({ type: "ADD_BEER", idx: i });
                    }}
                  >
                    +
                  </Button>
                </>
              </th>
              <th>
                <Delete
                  onClick={() => {
                    props.dispatch({ type: "DELETE_BEER", id: a.id });
                  }}
                >
                  삭제
                </Delete>
              </th>
            </Section>
          );
        })}
      </CartTable>
    </Container>
  );
};

const cartState = (state) => {
  return {
    state: state,
  };
};
export default connect(cartState)(Cart);
