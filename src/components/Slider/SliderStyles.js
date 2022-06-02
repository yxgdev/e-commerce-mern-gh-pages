import styled from "styled-components";
import breakpoint from "../breakpoints";

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Carousel = styled.div`
  padding: 0;
  margin: 0;
  height: 60vh;

  display: flex;
`;

export const Inner = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

export const CarouselItem = styled.div`
  height: 100%;
  width: 100vw;
  position: relative;

  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.bg});
  background-size: 100vw 100vh;

  margin: 0;
  padding: 0;
`;

export const InfoAndButtonsContainer = styled.div`
  height: 100%;
`;

export const ButtonContainer = styled.div``;

export const InfoContainer = styled.div`
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoTitle = styled.h1`
  margin-bottom: 10px;
  @media ${breakpoint.device.sm} {
    font-size: 20px;
  }
`;

export const InfoButton = styled.button`
  margin-top: 15px;
  padding: 10px;
  width: 120px;
  border-radius: 0;
  font-size: 20px;
  border: none;
  color: black;
  cursor: pointer;
`;

export const SliderSwitchLeft = styled.div`
  border-radius: 50%;
  background-color: gray;
  opacity: 30%;
  height: 60px;
  width: 60px;
  position: absolute;
  top: 25vh;
  left: 2vw;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media ${breakpoint.device.sm} {
    height: 45px;
    width: 45px;
  }
`;
export const SliderSwitchRight = styled.div`
  border-radius: 50%;
  background-color: gray;
  opacity: 30%;
  height: 60px;
  width: 60px;
  position: absolute;
  top: 25vh;
  right: 2vw;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media ${breakpoint.device.sm} {
    height: 45px;
    width: 45px;
  }
`;
