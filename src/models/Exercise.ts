import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface Exercise {
  id: number
  name: string
  description: string
  thumbnailUrl: string
  categoryId: number
}

export interface ExerciseCreationAttributes extends Optional<Exercise, "id" | "thumbnailUrl"> { }

export interface ExerciseInstance extends Model<Exercise, ExerciseCreationAttributes>, Exercise { }

export const Exercise = sequelize.define<ExerciseInstance, ExerciseCreationAttributes>('Exercise', {
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
  thumbnailUrl: {
    type: DataTypes.STRING
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'categories', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }
})