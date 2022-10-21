import { VocalRange } from "./VocalRange"
import { Exercise } from "./Exercise"
import { Video } from "./Video"
import { User } from "./User"

VocalRange.hasMany(Video)
Video.belongsTo(VocalRange)

Exercise.hasMany(Video)
Video.belongsTo(Exercise)

export {
  VocalRange,
  Exercise,
  Video,
  User
}