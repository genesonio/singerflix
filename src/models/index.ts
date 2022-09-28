import { Category } from "./Category"
import { Exercise } from "./Exercise"
import { Video } from "./Video"

Category.hasMany(Exercise)
Exercise.belongsTo(Category)

Exercise.hasMany(Video)
Video.belongsTo(Exercise)

export {
  Category,
  Exercise,
  Video
}