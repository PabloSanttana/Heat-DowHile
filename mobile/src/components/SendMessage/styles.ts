import styled from "styled-components/native";
import { Animated } from "react-native";

export const SendMessageContainer = styled.View`
  position: relative;
  background-color: ${(props) => props.theme.colors.gray[3]};
  height: 200px;
  padding: 20px;
`;
export const SendMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  background-color: ${(props) => props.theme.colors.pink};
`;
export const SendMessageButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  margin-left: 15px;
`;

export const SendMessageInput = styled.TextInput`
  flex: 1;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 17px;
`;

export const AlertSucceed = styled(Animated.View)`
  background-color: ${(props) => props.theme.colors.white};
  width: 270px;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 0;
  flex-direction: row;
  align-items: center;
`;
export const AlertSucceedText = styled.Text`
  color: ${(props) => props.theme.colors.green};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 15px;
  margin-right: 5px;
`;
