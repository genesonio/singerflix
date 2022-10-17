import AdminJS, { PageHandler } from "adminjs"
import { Category, Exercise, User, Video } from "../models"

export const dashboardOptions: {
  handler?: PageHandler
  component?: string
} = {
  component: AdminJS.bundle("./components/Dashboard"),
  handler: async (req, res, ctx) => {
    const exercises = await Exercise.count()
    const videos = await Video.count()
    const category = await Category.count()
    const studentUser = await User.count({ where: { role: 'user' } })

    res.json({
      'Exercícios': exercises,
      'Videos': videos,
      'Categorias': category,
      'Alunos': studentUser
    })
  }
}