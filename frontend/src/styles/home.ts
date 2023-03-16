import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  padding-left: 2rem;
`;

export const ContainerMessages = styled.section`
  width: 33.5rem;
  height: calc(100vh - 10rem);
  margin-right: 8rem;
  margin-top: 2rem;
  margin-bottom: 8rem;
  ul.messages {
    height: 29.68rem;
    margin-top: 9rem;
    list-style: none;
    overflow-y: scroll;

    li {
      width: 27.5rem;
      margin-bottom: 3rem;
      .flame {
        display: none;
      }
      &:first-child {
        .flame {
          display: inline;
        }
      }
      &:nth-child(2n) {
        margin-left: calc(32.5rem - 27.5rem);
      }
      p {
        font-size: 1.25rem;
        font-weight: ${(props) => props.theme.fontSize.regular};
      }

      .author {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        .containerImg {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          margin-right: 0.6875rem;

          border: 0.15rem solid transparent;
          border-radius: 1.857rem;
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
            width: 1.857rem;
            height: 1.857rem;
            border-radius: 1rem;
          }
        }
      }
    }
  }
`;
