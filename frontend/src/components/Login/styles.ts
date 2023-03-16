import styled from "styled-components";

export const Container = styled.div`
  width: 28rem;
  min-width: 453px;
  min-height: 100vh;
  height: 100%;
  background-color: #17171a;
  position: relative;
  z-index: 0;

  &::after {
    content: "";
    width: 120px;
    height: 40rem;
    background: ${(props) => props.theme.colors.degrade[1]};
    background: linear-gradient(
      225deg,
      ${(props) => props.theme.colors.degrade[1]} -70%,
      transparent 75%
    );
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
  }
  &::before {
    content: "";
    width: 120px;
    height: 40rem;
    background: ${(props) => props.theme.colors.degrade[0]};
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.degrade[0]} -70%,
      transparent 75%
    );
    position: absolute;
    z-index: -1;
  }
  .content {
    margin-top: 2.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    text-align: center;
    font-weight: ${(props) => props.theme.fontSize.bold};
    font-size: 2rem;
  }
  a {
    margin-top: 2rem;
    width: 16.125rem;
    height: 3.5rem;
    border: none;
    background-color: ${(props) => props.theme.colors.yellow};
    font-weight: ${(props) => props.theme.fontSize.bold};
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black[2]};
  }
`;
