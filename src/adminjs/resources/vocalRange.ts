import { ResourceOptions } from "adminjs";

export const vocalRangeResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name'],
  filterProperties: ['name', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name']
}