import { ResourceOptions } from "adminjs";

export const videoResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'description', 'exerciseId', 'order', 'uploadVideo', 'secondsLong'],
  filterProperties: ['name', 'description', 'exerciseId', 'secondsLong', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'exerciseId', 'order', 'secondsLong']
}