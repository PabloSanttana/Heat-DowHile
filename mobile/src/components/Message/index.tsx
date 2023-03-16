import React from "react";
import { useTheme } from "styled-components";

import {
  MessageContainer,
  MessageText,
  MessageAuthorContainer,
  MessageBorderLinearGradient,
  MessageAuthorAvatar,
  MessageAuthorImageContainer,
  MessageAuthorName,
} from "./styles";
import { User } from "@src/hooks/auth";

type MessageData = {
  id: string;
  text: string;
  created_at: string;
  user_id: string;
  user: User;
};

type MessageProps = {
  message: MessageData;
  isNow?: boolean;
};

export default function Message({ message, isNow = false }: MessageProps) {
  const theme = useTheme();
  return (
    <MessageContainer>
      <MessageText>
        {message.text} {isNow && "🔥🔥"}{" "}
      </MessageText>

      <MessageAuthorContainer>
        <MessageBorderLinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={[theme.colors.degrade[0], theme.colors.degrade[1]]}
        >
          <MessageAuthorImageContainer>
            <MessageAuthorAvatar source={{ uri: message.user.avatar_url }} />
          </MessageAuthorImageContainer>
        </MessageBorderLinearGradient>
        <MessageAuthorName>{message.user.name}</MessageAuthorName>
      </MessageAuthorContainer>
    </MessageContainer>
  );
}
