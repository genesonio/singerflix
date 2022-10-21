import { ResourceWithOptions } from "adminjs";
import { VocalRange, Exercise, User, Video } from "../../models";
import { vocalRangeResourceOptions } from "./vocalRange";
import { exerciseResourceFeatures, exerciseResourceOptions } from "./exercise";
import { userResourceOptions } from "./user";
import { videoResourceFeatures, videoResourceOptions } from "./video";


export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: VocalRange,
    options: vocalRangeResourceOptions
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