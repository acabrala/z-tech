// import { Movies } from '../models/Movies';
// import { Actors } from '../models/Actors';

// export class MoviesRepository {

//   getMovies = async(censura: boolean) => {
//     return Movies.findAll({
//       where:{ censura},
//       include: [Actors]
//     });
//   }

//   getMoviesByName = async(nome: string) => {
//     return Movies.findOne({
//       where: {nome}
//     });
//   }

//   createMovies = async(movie: any) => {

//     return Movies.create(movie);

//   }

//   createActors = async(atores:any, id: number) => {

//     const actors = await atores.map((atores: any) => {
//       atores.id_filme = id;
//       Actors.create(atores);
//     });

//     return actors;
//   }
// }
