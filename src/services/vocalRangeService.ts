import { VocalRange } from "../models"

export const vocalRangeService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage

    const { count, rows } = await VocalRange.findAndCountAll({
      attributes: ['id', 'name'],
      limit: perPage,
      offset,
    })

    return {
      vocalRange: rows,
      page,
      perPage,
      total: count
    }

  }
}