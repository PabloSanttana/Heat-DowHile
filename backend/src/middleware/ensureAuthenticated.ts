import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      errorCode: "Unauthorized, token is invalid",
    });
  }

  const [bearer, token] = authToken.split(" ");

  if (!(bearer.toLocaleLowerCase() === "bearer")) {
    return res.status(401).json({
      errorCode: "Unauthorized, token is invalid",
    });
  }

  try {
    const { sub } = verify(token, process.env.JWT_SECRET_KEY) as IPayLoad;

    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).json({
      errorCode: "token.expired",
    });
  }
}
