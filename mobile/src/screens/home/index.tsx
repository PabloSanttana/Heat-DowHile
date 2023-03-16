import React, { useState, useEffect, useCallback } from "react";
import { FlatList, KeyboardAvoidingView, Platform } from "react-native";

import Header from "@src/components/Header";
import Message from "@src/components/Message";
import LoginBox from "@src/components/LoginBox";
import SendMessage from "@src/components/SendMessage";
import { io } from "socket.io-client";

import { HomeContainer, HomeContent } from "./styles";
import api from "@src/services/api";
import { useAuth, User } from "@src/hooks/auth";

type MessageProps = {
  id: string;
  text: string;
  created_at: string;
  user_id: string;
  user: User;
};

export function Home() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    let socket: any;
    (() => {
      socket = io("http://192.168.1.5:3333");
      socket.on("new_message", (msg: MessageProps) => {
        setMessages((oldValue) => [msg, ...oldValue]);
      });
    })();
    return () => socket?.disconnect();
  }, []);

  useEffect(() => {
    get3LastMessages();
  }, []);

  const get3LastMessages = useCallback(async () => {
    const response = await api.get<MessageProps[]>("/messages/last3");
    const { data } = response;

    setMessages(data);
  }, []);

  return (
    <HomeContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <HomeContent>
          <Header />

          <FlatList
            data={messages}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Message message={item} isNow={messages[0].id === item.id} />
            )}
            style={{ flex: 1, marginTop: 40 }}
          />
        </HomeContent>
        {user.id ? <SendMessage /> : <LoginBox />}
      </KeyboardAvoidingView>
    </HomeContainer>
  );
}
