import { Request, Response } from "express";
import { GetLast3MessagesService } from "../services/GetLast3MessagesService";

class GetLast3MessagesController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetLast3MessagesService();
      const messages = await service.execute();
      return res.status(200).json(messages);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { GetLast3MessagesController };
