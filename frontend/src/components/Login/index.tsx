import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/router";
import { BarLoader } from "react-spinners";

import { Container } from "./styles";
import { useAuth } from "@/hooks/auth";

export function Login() {
  const router = useRouter();
  const github_url = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}`;
  const { handleGithubCodeAuth, isLoading } = useAuth();

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");
    if (hasGithubCode) {
      const [urlWithGithubCode, githubCode] = url.split("?code=");
      router.push(
        {
          pathname: urlWithGithubCode,
        },
        undefined,
        { shallow: true }
      );
      handleGithubCodeAuth(githubCode);
    }
  }, []);

  return (
    <Container>
      <img src="/login.svg" alt="Imagem de login" />
      <div className="content">
        <h1>
          Envie e compartilhe <br /> sua mensagem
        </h1>
        <a href={github_url}>
          <BsGithub size={24} style={{ marginRight: 10 }} />
          {isLoading ? <BarLoader color="#000" /> : "Entrar com Github"}
        </a>
      </div>
    </Container>
  );
}
