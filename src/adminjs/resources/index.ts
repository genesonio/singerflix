import { ResourceWithOptions } from "adminjs";
import { Category, Exercise, Video } from "../../models";
import { categoryResourceOptions } from "./category";
import { exerciseResourceOptions } from "./exercise";
import { videoResourceFeatures, videoResourceOptions } from "./video";


export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Exercise,
    options: exerciseResourceOptions
  },
  {
    resource: Video,
    options: videoResourceOptions,
    features: videoResourceFeatures
  }
]