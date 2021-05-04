import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Dawid Gora',
    email: 'dawid@gora.pl',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
