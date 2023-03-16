import { useEffect, useState } from "react";
import { Login } from "@/components/Login";

import Image from "next/image";

import { Container, ContainerMessages } from "@/styles/home";
import { Profiler } from "@/components/Profiler";
import { useAuth, User } from "@/hooks/auth";
import api from "@/services/api";
import { io } from "socket.io-client";

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
      socket = io("http://localhost:3333");
      socket.on("new_message", (msg: MessageProps) => {
        setMessages((oldValue) => [msg, ...oldValue]);
      });
    })();
    return () => socket?.disconnect();
  }, []);

  useEffect(() => {
    get3LastMessages();
  }, []);

  async function get3LastMessages() {
    const response = await api.get<MessageProps[]>("/messages/last3");
    const { data } = response;

    setMessages(data);
  }

  return (
    <Container>
      <ContainerMessages>
        <Image src="/LogoDoWhile-2021.svg" width={280} height={24} alt="logo" />
        <ul className="messages">
          {messages?.map((message) => {
            return (
              <li key={message.id}>
                <p>
                  {message.text} <span className="flame">🔥🔥</span>
                </p>
                <div className="author">
                  <div className="containerImg">
                    <img
                      src={message.user.avatar_url}
                      alt={message.user.login}
                    />
                  </div>
                  <span>{message.user.name}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </ContainerMessages>
      {user.id ? <Profiler /> : <Login />}
    </Container>
  );
}

export default Home;
