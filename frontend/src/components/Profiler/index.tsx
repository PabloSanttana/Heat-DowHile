import React, { useState } from "react";
import { CgLogOut } from "react-icons/cg";

import { BsGithub } from "react-icons/bs";

import { Container, ProfilerContainer } from "./styles";
import { useAuth } from "@/hooks/auth";
import { useSetting } from "@/hooks/setting";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "@/services/api";

export function Profiler() {
  const { user, logout } = useAuth();
  const { theme } = useSetting();
  const [message, setMessage] = useState("");

  function handleActive() {
    (() =>
      toast.success("Mensagem enviada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      }))();
  }

  async function sendMessage() {
    try {
      if (message.length === 0) return;
      await api.post("/messages", {
        message,
      });
      handleActive();
      setMessage("");
    } catch (error) {}
  }

  return (
    <Container>
      <ProfilerContainer>
        <button onClick={logout} className="logout">
          <CgLogOut size={32} color={theme.colors.white} />
        </button>
        <div className="profilerContainer">
          <div className="infoUser">
            <div className="containerImg">
              <img src={user.avatar_url} alt={user.name} />
            </div>

            <span className="name">{user.name}</span>
            <span className="login">
              <BsGithub size={16} style={{ marginRight: 10 }} />
              {user.login}
            </span>
          </div>
          <form>
            <label htmlFor="">Mensagem</label>
            <textarea
              placeholder="Qual sua expectativa para o evento?"
              name=""
              id=""
              cols={30}
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="button" onClick={sendMessage}>
              enviar mensagem
            </button>
          </form>
        </div>
      </ProfilerContainer>
      <ToastContainer />
    </Container>
  );
}
