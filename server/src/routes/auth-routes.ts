import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Model, DataTypes, Sequelize } from 'sequelize';

export interface UserAttributes {

  id: number;

  email: string;

  password: string;

}
export class LocalUser extends Model<UserAttributes> implements UserAttributes {

  public id!: number;

  public email!: string;

  public password!: string;

}



const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

LocalUser.init(

  {

    id: {

      type: DataTypes.INTEGER,

      autoIncrement: true,

      primaryKey: true,

    },

    email: {

      type: DataTypes.STRING,

      allowNull: false,

      unique: true,

    },

    password: {

      type: DataTypes.STRING,

      allowNull: false,

    },

  },

  {

    sequelize,

    modelName: 'User',

  }

);

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await LocalUser.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
