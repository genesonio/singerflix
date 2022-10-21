import AdminJS, { PageHandler } from "adminjs"
import { VocalRange, Exercise, User, Video } from "../models"

export const dashboardOptions: {
  handler?: PageHandler
  component?: string
} = {
  component: AdminJS.bundle("./components/Dashboard"),
  handler: async (req, res, ctx) => {
    const exercises = await Exercise.count()
    const videos = await Video.count()
    const vocalRange = await VocalRange.count()
    const studentUser = await User.count({ where: { role: 'user' } })

    res.json({
      'Exercícios': exercises,
      'Videos': videos,
      'Classificação Vocal': vocalRange,
      'Alunos': studentUser
    })
  }
}