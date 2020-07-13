import { Table, Column, Model,DataType, AutoIncrement, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import { Movies } from './Movies';

@Table

export class Actors extends Model<Actors> {

  @AutoIncrement
  @PrimaryKey
  @Column({type: DataType.INTEGER })
  id: number;

  @Column({ allowNull: true })
  nome: string;

  @ForeignKey(() => Movies)
  @Column
  id_filme: number;

}
