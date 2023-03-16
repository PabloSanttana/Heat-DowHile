import React from "react";
import { useTheme } from "styled-components";
import { Fontisto } from "@expo/vector-icons";
import { useAuth } from "@src/hooks/auth";
import { ButtonContainer, ButtonText } from "./styles";

export default function ButtonIcon() {
  const theme = useTheme();
  const { SignIn } = useAuth();
  return (
    <ButtonContainer onPress={() => SignIn()} activeOpacity={0.7}>
      <Fontisto name="github" size={24} color={theme.colors.black[1]} />
      <ButtonText>ENTRAR COM GITHUB</ButtonText>
    </ButtonContainer>
  );
}
