// import { MoviesController } from '../controllers/MoviesController';

// export default class Router {

//   private readonly moviesControllers: MoviesController;
//   private readonly BASE_URL: string = '/api/v1';
//   private readonly GET_MOVIES: string = this.BASE_URL + '/movies/:censura';
//   private readonly CREATE_MOVIES: string = this.BASE_URL + '/movie';

//   constructor(moviesController: MoviesController){
//     this.moviesControllers = moviesController;

//   }

//   public startWith(app){

//     app.route(this.GET_MOVIES).get(this.moviesControllers.listMovies);
//     app.route(this.CREATE_MOVIES).post(this.moviesControllers.createMovie);

//   }
// }
