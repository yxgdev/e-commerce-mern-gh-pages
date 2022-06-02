import styled from "styled-components";
import breakpoint from "../../breakpoints";

export const SingleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  border: 1px solid black;
  padding: 20px;
  @media ${breakpoint.device.sm} {
    width: 300px;
    height: 300px;
  }
`;
export const ItemImage = styled.img`
  max-width: 200px;
  height: 130px;
`;
export const ItemName = styled.h2``;
export const ItemPrice = styled.h2`
  font-weight: normal;
`;

export const ItemPriceNameContainer = styled.div`
  margin-top: 15px;

  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ItemClickView = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-weight: bold;
  background-color: gold;
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

export const ItemClickAddCard = styled.button`
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  font-weight: bold;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
