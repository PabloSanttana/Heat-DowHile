import { Request, Response } from "express";
import { ProfilerUserService } from "../services/ProfilerUserService";

class ProfilerUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    try {
      const service = new ProfilerUserService();
      const user = await service.execute(user_id);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { ProfilerUserController };
