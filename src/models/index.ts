import { Category } from "./Category"
import { Exercise } from "./Exercise"

Category.hasMany(Exercise)
Exercise.belongsTo(Category)

export {
  Category,
  Exercise
}