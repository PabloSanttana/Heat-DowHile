import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Platform.OS === "android" ? "15px" : "0px"};
`;

export const HeaderLogo = styled.Image`
  width: 150px;
  height: 13px;
`;

export const HeaderUserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderUserImageContainer = styled.View`
  background-color: ${(props) => props.theme.colors.black[1]};
  margin: 3px;
  border-radius: 100px;
  padding: 2px;
`;

export const HeaderUserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const HeaderLogout = styled.Button``;

export const HeaderLinearGradient = styled(LinearGradient)`
  border-radius: 100px;
  margin-left: 20px;
`;
