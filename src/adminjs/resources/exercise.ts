import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const exerciseResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'description', 'uploadThumbnail', 'categoryId'],
  filterProperties: ['name', 'description', 'categoryId', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'categoryId']
}

export const exerciseResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, '..', '..', '..', 'public')
      }
    },
    properties: {
      key: 'thumbnailUrl',
      file: 'uploadThumbnail'
    },
    uploadPath: (record, filename) => `thumbnails/exercise-${record.get('id')}/${filename}`
  })
]