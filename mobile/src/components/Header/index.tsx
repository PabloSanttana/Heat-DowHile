import React from "react";
import { Platform } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import Logo from "@src/assets/logo.png";
import User from "@src/assets/user.png";
import { useAuth } from "@src/hooks/auth";

import {
  HeaderContainer,
  HeaderLogo,
  HeaderLogout,
  HeaderUserContainer,
  HeaderUserImage,
  HeaderUserImageContainer,
  HeaderLinearGradient,
} from "./styles";

export default function Header() {
  const theme = useTheme();
  const { user, logout } = useAuth();
  return (
    <HeaderContainer>
      <HeaderLogo source={Logo} />
      <HeaderUserContainer>
        {user.id && (
          <HeaderLogout
            title="Sair"
            color={Platform.OS === "android" ? "transparent" : "white"}
            onPress={() => logout()}
          />
        )}

        <HeaderLinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={[theme.colors.degrade[0], theme.colors.degrade[1]]}
        >
          <HeaderUserImageContainer>
            {user.id ? (
              <HeaderUserImage source={User} />
            ) : (
              <FontAwesome5 name="user-circle" size={40} color="white" />
            )}
          </HeaderUserImageContainer>
        </HeaderLinearGradient>
      </HeaderUserContainer>
    </HeaderContainer>
  );
}
