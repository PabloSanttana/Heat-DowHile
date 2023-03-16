import styled from "styled-components/native";

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.black[1]};
`;

export const HomeContent = styled.View`
  flex: 1;
  padding: 20px;
  padding-bottom: 0px;
`;
