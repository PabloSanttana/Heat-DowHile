import styled from "styled-components";

export const Container = styled.div`
  width: 38.3rem;
  min-height: 100vh;
  height: 100%;
  background-image: url("/background.png");
  background-position: right;
  background-size: 25.3rem 100%;
  background-repeat: no-repeat;
`;

export const ProfilerContainer = styled.div`
  width: 28.3rem;
  height: 38.875rem;
  background-color: #1b1b1f;
  margin-top: 10rem;
  padding: 1.5rem;
  .logout {
    background-color: transparent;
    border: none;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  .profilerContainer {
    .infoUser {
      display: flex;
      flex-direction: column;
      align-items: center;
      .containerImg {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7rem;
        height: 7rem;

        border: 0.25rem solid transparent;
        border-radius: 3.5rem;
        background: linear-gradient(
            to right,
            ${(props) => props.theme.colors.black[1]},
            ${(props) => props.theme.colors.black[1]}
          ),
          linear-gradient(
            to right,
            ${(props) => props.theme.colors.degrade[0]},
            ${(props) => props.theme.colors.degrade[1]}
          );
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        img {
          width: 5.8rem;
          height: 5.8rem;
          border-radius: 3rem;
        }
      }
      .name {
        font-weight: ${(props) => props.theme.fontSize.bold};
        font-size: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
      }
      .login {
        font-weight: ${(props) => props.theme.fontSize.regular};
        font-size: 0.873rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      height: 17.25rem;
      position: relative;
      background-color: red;

      label {
        font-weight: ${(props) => props.theme.fontSize.bold};
        font-size: 1.25rem;
        background-color: ${(props) => props.theme.colors.gray[3]};
        padding: 1.125rem 1.5rem;
      }
      textarea {
        padding: 1.125rem 1.5rem;
        background-color: ${(props) => props.theme.colors.black[0]};
        border: none;
        font-weight: ${(props) => props.theme.fontSize.regular};
        font-size: 1rem;
        color: ${(props) => props.theme.colors.white};
        flex: 1;
      }

      button {
        position: absolute;
        bottom: 1.125rem;
        right: 1.5rem;
        height: 2.5rem;
        width: 12.18rem;
        border: none;
        text-transform: uppercase;
        font-weight: ${(props) => props.theme.fontSize.bold};
        font-size: 0.873rem;
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors.pink};
      }
    }
  }
`;
