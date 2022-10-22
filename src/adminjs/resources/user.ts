import { ResourceOptions } from "adminjs";

const userResourceOptions: ResourceOptions = {
  navigation: 'Administração',
  properties: {
    gender: {
      availableValues: [
        { value: 'male', label: 'Masculino' },
        { value: 'female', label: 'Feminino' }
      ]
    },
    birth: {
      type: 'date'
    },
    password: {
      type: 'password'
    },
    role: {
      availableValues: [
        { value: 'admin', label: 'Administrador' },
        { value: 'user', label: 'Usuário' }
      ]
    }
  },
  editProperties: [
    'firstName',
    'lastName',
    'gender',
    'phone',
    'birth',
    'email',
    'password',
    'role'
  ],
  filterProperties: [
    'firstName',
    'lastName',
    'gender',
    'phone',
    'birth',
    'email',
    'password',
    'role',
    'createdAt',
    'updatedAt'
  ],
  listProperties: [
    'id',
    'firstName',
    'gender',
    'email',
    'role'
  ],
  showProperties: [
    'id',
    'firstName',
    'lastName',
    'gender',
    'phone',
    'birth',
    'email',
    'role',
    'createdAt',
    'updatedAt'
  ]
}

export { userResourceOptions }