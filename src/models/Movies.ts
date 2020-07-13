import { Table, Column, Model, CreatedAt, Unique, DataType, AutoIncrement, HasMany, PrimaryKey, NotNull } from 'sequelize-typescript';
import { Actors } from './Actors';
import Sequelize from 'sequelize';

@Table

export class Movies extends Model<Movies> {

  @AutoIncrement
  @PrimaryKey
  @Column({type: DataType.INTEGER })
  id: number;

  @Unique
  @Column({allowNull: false})
  nome: string;

  @Column(DataType.DATEONLY)
  data_lancamento: Date;

  @Column({allowNull: false})
  censura: boolean;

  @Column
  direcao: string;

  @HasMany(() => Actors)
    elenco: Actors[];
}
