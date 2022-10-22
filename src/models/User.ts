import { Model, Optional, DataTypes } from "sequelize"
import { sequelize } from "../database"
import bcrypt from "bcrypt"

export interface User {
  id: number
  firstName: string
  lastName: string
  gender: 'male' | 'female'
  phone: string
  birth: Date
  email: string
  password: string
  role: 'admin' | 'user'
}

export interface UserCreationAttributes extends Optional<User, 'id'> { }

export interface UserInstance extends Model<User, UserCreationAttributes>, User { }

export const User = sequelize.define<UserInstance, User>('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  gender: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isIn: [['male', 'female']]
    }
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  birth: {
    allowNull: false,
    type: DataTypes.DATE
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isIn: [['admin', 'user']]
    }
  }
}, {
  hooks: {
    beforeSave: async (user) => {
      if (user.isNewRecord || user.changed('password')) {
        user.password = await bcrypt.hash(user.password.toString(), 10)
      }
    }
  }
})