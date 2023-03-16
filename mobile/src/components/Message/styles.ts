import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const MessageContainer = styled.View`
  margin-bottom: 30px;
`;
export const MessageText = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
`;

export const MessageAuthorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const MessageBorderLinearGradient = styled(LinearGradient)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const MessageAuthorImageContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.black[1]};
  margin: 3px;
  border-radius: 20px;
  padding: 2px;
`;

export const MessageAuthorAvatar = styled.Image`
  flex: 1;
  border-radius: 20px;
`;

export const MessageAuthorName = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  margin-left: 20px;
`;
