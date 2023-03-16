import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  background-color: ${(props) => props.theme.colors.yellow};
`;
export const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.black[1]};
  font-size: 15px;
  margin-left: 15px;
`;
