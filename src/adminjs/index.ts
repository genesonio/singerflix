import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { Category, Exercise, User, Video } from "../models";
import bcrypt from "bcrypt"
import { locale } from "./locale";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminJsResources,
  branding: {
    companyName: 'SingerFlix'
  },
  locale: locale,
  dashboard: {
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
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ where: { email } })
    if (user && user.role === 'admin') {
      const matched = await bcrypt.compare(password, user.password)

      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: 'cookiePassword'
}, null, {
  resave: false,
  saveUninitialized: false
})