import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const videoResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'description', 'exerciseId', 'order', 'uploadVideo', 'secondsLong'],
  filterProperties: ['name', 'description', 'exerciseId', 'secondsLong', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'exerciseId', 'order', 'secondsLong']
}

export const videoResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, '..', '..', '..', 'uploads')
      }
    },
    properties: {
      key: 'videoUrl',
      file: 'uploadVideo'
    },
    uploadPath: (record, filename) => `videos/course-${record.get('exerciseId')}/${filename}`
  })
]
