import { ResourceWithOptions } from "adminjs";
import { Category, Exercise, User, Video } from "../../models";
import { categoryResourceOptions } from "./category";
import { exerciseResourceFeatures, exerciseResourceOptions } from "./exercise";
import { userResourceOptions } from "./user";
import { videoResourceFeatures, videoResourceOptions } from "./video";


export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Exercise,
    options: exerciseResourceOptions,
    features: exerciseResourceFeatures
  },
  {
    resource: Video,
    options: videoResourceOptions,
    features: videoResourceFeatures
  },
  {
    resource: User,
    options: userResourceOptions
  }
]