/**
 * Receber code(string)
 * Recuperar o access_token no github
 * Verificar se o usuarios
 *---- Sim = Gera um token
  --- Nao = Cadastrar usuario, gera um token
  * retornar o token com as infos do user
 */

import axios from "axios";
import prismaClient from "../prisma";
import { sign } from "jsonwebtoken";

interface IAccessToken {
  access_token: string;
}

interface IUserResponse {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

class AuthenticateUserService {
  async execute(code: string, mobile = false) {
    const url = "https://github.com/login/oauth/access_token";

    if (!code) {
      throw new Error("code is required");
    }

    const { data: accessTokenResponse } = await axios.post<IAccessToken>(
      url,
      null,
      {
        params: {
          client_id: mobile
            ? process.env.GITHUB_CLIENT_ID_MOBILE
            : process.env.GITHUB_CLIENT_ID,
          client_secret: mobile
            ? process.env.GITHUB_CLIENT_SECRET_KEY_MOBILE
            : process.env.GITHUB_CLIENT_SECRET_KEY,
          code,
        },
        headers: {
          Accept: "application/json",
        },
      }
    );

    const { data: userResponse } = await axios.get<IUserResponse>(
      "https://api.github.com/user",
      {
        headers: {
          authorization: `Bearer ${accessTokenResponse.access_token}`,
        },
      }
    );

    const { avatar_url, id, login, name } = userResponse;

    let user = await prismaClient.user.findFirst({
      where: {
        github_id: id,
      },
    });

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          avatar_url,
          login,
          name,
          github_id: id,
        },
      });
    }

    const token = sign(
      {
        user: {
          name: user.name,
          avatar_url: avatar_url,
          id: user.id,
        },
      },
      process.env.JWT_SECRET_KEY,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return { user, token };
  }
}

export { AuthenticateUserService };
