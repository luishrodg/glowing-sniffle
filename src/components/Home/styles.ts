import { MapInteractionCSS } from "react-map-interaction";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  flex: 1;
  width: 100%;
  border: 0.1rem solid #cecece;
  background: #f7f8fc;

  & > div:first-child > div:last-child {
    bottom: 1rem;
    left: 0;
    right: 0 !important;
    margin-left: auto;
    margin-right: auto;
    top: initial !important;
    display: flex;
    width: 10rem;
    height: 5rem;

    > div > button {
      width: 5rem !important;
      height: 5rem !important;
      background: white;
      border: 0;
      padding-top: 0 !important;
      font-size: 2.6rem;
      cursor: pointer;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  height: 18.5rem;
  width: 43rem;
  border: 0.1rem solid #cbcccc99;
  border-radius: 0.4rem;
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  background: #7cd8e3;
  width: 100%;
  height: 7rem;
  font-size: 1.6rem;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 2rem;
`;

export const CardContent = styled.div`
  flex: 1;
  padding: 2.4rem;
`;

export const CardButton = styled.button`
  width: 100%;
  height: 100%;
  border: 0.1rem dashed #cbcccc;
  cursor: pointer;
  text-align: left;
  padding-left: 2rem;
  color: #777777;

  background: white;

  :hover {
    background: white;
  }
`;

export const ActionButton = styled.button`
  width: 4rem;
  height: 4rem;
  border: none;
  cursor: pointer;
  text-align: center;
  color: white;
  border-radius: 50%;
  position: relative;

  background: #7cd8e3;

  :hover {
    background: #7cd8e3;
  }

  margin-top: 2rem;

  ::after {
    content: "";
    position: absolute;
    top: -2rem;
    height: 2.5rem;
    width: 0.5rem;
    left: 1.725rem;
    background: #7cd8e3;
  }
`;

export const MapInteraction = styled(MapInteractionCSS)`
  background: red;
`;
