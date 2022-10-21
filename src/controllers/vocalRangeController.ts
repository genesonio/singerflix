import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { vocalRangeService } from "../services/vocalRangeService";

export const vocalRangeController = {
  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query)

    try {
      const paginatedVocalRange = await vocalRangeService.findAllPaginated(page, perPage)

      return res.json(paginatedVocalRange)
    } catch (err) {

      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }

    }
  }
}
