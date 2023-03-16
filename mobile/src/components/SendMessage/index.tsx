import React, { useState, useRef } from "react";
import { Keyboard, Animated } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { useTheme } from "styled-components";
import api from "@src/services/api";
import {
  SendMessageContainer,
  SendMessageButton,
  SendMessageButtonText,
  SendMessageInput,
  AlertSucceed,
  AlertSucceedText,
} from "./styles";

export default function SendMessage() {
  const theme = useTheme();
  const [message, setMessage] = useState("");
  const fadeAnim = useRef(new Animated.Value(280)).current;

  function alertSuccess() {
    Animated.spring(fadeAnim, {
      toValue: -20,
      bounciness: 20,
      speed: 4,
      useNativeDriver: true,
    }).start();
  }
  function isHiddenAlert() {
    Animated.timing(fadeAnim, {
      toValue: 280,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  async function sendMessage() {
    try {
      if (message.length === 0) return;
      await api.post("/messages", {
        message,
      });
      setMessage("");
      Keyboard.dismiss();
      setTimeout(() => alertSuccess(), 500);
    } catch (error) {
    } finally {
      setTimeout(() => isHiddenAlert(), 3500);
    }
  }

  return (
    <>
      <SendMessageContainer>
        <SendMessageInput
          value={message}
          onChangeText={setMessage}
          keyboardAppearance="dark"
          placeholder="Qual sua expectativa para o evento?"
          placeholderTextColor={theme.colors.gray[2]}
          multiline={true}
          textAlignVertical="top"
        />
        <SendMessageButton onPress={() => sendMessage()} activeOpacity={0.7}>
          <SendMessageButtonText>ENVIAR MENSAGEM</SendMessageButtonText>
        </SendMessageButton>
      </SendMessageContainer>
      <AlertSucceed
        style={{
          transform: [{ translateX: fadeAnim }],
        }}
      >
        <AlertSucceedText>Messagem envida com sucesso</AlertSucceedText>
        <FontAwesome5
          name="check-circle"
          size={24}
          color={theme.colors.green}
        />
      </AlertSucceed>
    </>
  );
}
