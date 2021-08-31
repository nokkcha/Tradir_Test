import React, { useState, useEffect } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import "antd/dist/antd.css";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";

const BeerlistPage = styled.div`
  width: 100%;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 45rem;
  height: 60rem;
  padding: 30px;
  overflow: scroll;
  background: white;
  border-radius: 20px;
  text-align: center;
`;

const Container = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;
  font-size: 18px;
  font-color: gray;
`;
const CloseButton = styled.button`
  font-size: 28px;
  background: none;
  border: none;
  display: flex;
  margin-rigth: 20px;
`;

const Description = styled.h4`
  margin-top: 10%;
  font-size: 20px;
`;

const TastyTips = styled.ul`
  font-size: 16px;
  list-decoration: none;
`;

const Button = styled.button`
  margin-top: 20px;
  border: 1px solid black;
  background-color: black;
  width: 150px;
  border-radius: 20px;
  color: white;
  font-size: 20px;
`;

const BeerName = styled.h2`
  font-size: 32px;
  margin: 20px;
`;
const BeerList = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const dispatch = useDispatch();

  const handleModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const columns = [
    {
      title: "pic",
      field: "image_url",

      render: (rowData) => (
        <img
          style={{ height: 250 }}
          src={rowData.image_url}
          alt={rowData.name}
        />
      ),
    },
    {
      title: "Name",
      field: "name",
    },
    {
      title: "ABS",
      field: "abv",
    },
  ];

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);
  return (
    <BeerlistPage>
      <MaterialTable
        title="Beer List 🍺"
        key={data.id}
        localization={{
          header: {
            actions: "Cart",
          },
        }}
        data={data}
        onRowClick={(event, clickData) => {
          handleModal(clickData);
          setModalData(clickData);
        }}
        columns={columns}
        actions={[
          {
            icon: "+",
            tooltip: "Put cart",
            onClick: (event, rowData) => {
              dispatch({
                type: "항목추가",
                data: {
                  id: rowData.id,
                  name: rowData.name,
                  quan: 1,
                  image: rowData.image_url,
                },
              });
            },
          },
        ]}
        options={{
          search: false,
          toolbar: true,
          actionsColumnIndex: -1,
          headerStyle: { fontSize: 36, padding: 30, zIndex: 0 },
          rowStyle: {
            fontSize: 30,
            textAlign: "center",
          },
        }}
      ></MaterialTable>

      <>
        {showModal ? (
          <Background>
            <ModalContainer>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
              <BeerName>{modalData.name}</BeerName>
              <img src={modalData.image_url} width="100" />

              <Description>{modalData.description}</Description>
              <Container>{modalData.brewers_tips}</Container>
              <TastyTips>
                {modalData.food_pairing.map((food) => (
                  <li>{food}</li>
                ))}
              </TastyTips>

              <Button onClick={closeModal}>Close</Button>
            </ModalContainer>
          </Background>
        ) : null}
      </>
    </BeerlistPage>
  );

  //맥주 가져오기
};

const BeerState = (state) => {
  return {
    state: state,
  };
};
export default connect(BeerState)(BeerList);
