import * as express from 'express';
import { Server, createServer } from 'http';
import Router from './routes/Router';
import * as dotenv from 'dotenv';
import { sequelize } from './db/sequelize';
import { MoviesRepository } from './repository/MoviesRepository';
import { MoviesController } from './controllers/MoviesController';
import * as cors from 'cors';

dotenv.config({path: '.env'});

export class App {

  private app: express.Application;
  private port: string | number;
  public server: Server;

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.middleware();
    this.listen();
  }

  private createApp(): void {
    this.app = express();
  }

  private async listen() {
    try {
      sequelize.sync({ force: false });
      this.server.listen(this.port, () => {
        console.log('Running server on port %s', this.port);

      });
    } catch (e) {
      console.log('ERROR:' + e);
    }
  }

  private config(): void {
    this.port = process.env.PORT;
  }

  public createServer(): void {
    this.server = createServer(this.app);
  }
  private middleware(): void {

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());

    const moviesRepository = new MoviesRepository();
    new Router(new MoviesController(moviesRepository))
        .startWith(this.app);

  }

  public getApp(): express.Application {
    return this.app;
  }
}
