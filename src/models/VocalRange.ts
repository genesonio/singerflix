import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface VocalRange {
  id: number
  name: string
}

export interface VocalRangeCreationAttributes extends Optional<VocalRange, 'id'> { }

export interface VocalRangeInstance extends Model<VocalRange, VocalRangeCreationAttributes>, VocalRange { }

export const VocalRange = sequelize.define<VocalRangeInstance, VocalRange>('VocalRange', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  }
})