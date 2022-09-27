import { ResourceOptions } from "adminjs";

export const exerciseResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'description', 'uploadThumbnail', 'categoryId'],
  filterProperties: ['name', 'description', 'categoryId', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'categoryId']
}