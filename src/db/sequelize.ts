import { Sequelize } from 'sequelize-typescript';
import { Movies } from '../models/Movies';
import { Actors } from '../models/Actors';
import * as dotenv from 'dotenv';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op as any,
  host: 'localhost',
  database: 'z-tech',
  username: 'postgres',
  password: '123456',
  logging: false
});

sequelize.addModels([Movies,Actors]);
