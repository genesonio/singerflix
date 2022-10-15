import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface Video {
  id: number
  name: string
  description: string
  order: number
  videoUrl: string
  secondsLong: number
  exerciseId: number
}

export interface VideoCreationAttributes extends Optional<Video, 'id' | 'videoUrl' | 'secondsLong'> { }

export interface VideoInstance extends Model<Video, VideoCreationAttributes>, Video { }

export const Video = sequelize.define<VideoInstance, Video>('Video', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  order: {
    type: DataTypes.INTEGER
  },
  videoUrl: {
    type: DataTypes.STRING
  },
  secondsLong: {
    type: DataTypes.INTEGER
  },
  exerciseId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'exercises', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }
})