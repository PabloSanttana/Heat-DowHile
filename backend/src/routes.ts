import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfilerUserController } from "./controllers/ProfilerUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

router.get("/signin/callback", (req, res) => {
  const { code } = req.query;

  res.status(200).send({ message: code });
});

router.post("/authenticate", new AuthenticateUserController().handle);
router.post(
  "/authenticate/mobile",
  new AuthenticateUserController().handleMobile
);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get(
  "/profiler",
  ensureAuthenticated,
  new ProfilerUserController().handle
);

export { router };
