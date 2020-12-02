// import { MoviesRepository } from '../repository/MoviesRepository';
// import { Response } from '../models/Response';

// export class MoviesController {

//   private readonly moviesRepository: MoviesRepository;

//   constructor(moviesRepository: MoviesRepository){
//     this.moviesRepository = moviesRepository;

//   }

//   listMovies = async(req, res) => {
//     try {

//       const movies = await this.moviesRepository.getMovies(req.params.censura);

//       return res.status(200).json(new Response(false, 'Operação realizada', movies));

//     } catch (e) {

//       return res.status(422).json(new Response(true, e, null));
//     }
//   }

//   createMovie = async (req, res) => {
//     try {

//       const actors = req.body.atores;

//       if(actors.length > 10){
//         return res.status(404).json(new Response(true,'Desculpe, não foi possivel salvar este filme, pois o limite de 10 atores foi ultrapassada',null ));
//       }

//       const isMovie = await this.moviesRepository
//         .getMoviesByName(req.body.nome);

//       if(isMovie){
//         return res.status(404).json(new Response(true, 'Não foi possível salvar, filme informado já existe', null));
//       }

//       const movies = await this.moviesRepository.createMovies(req.body);

//       await this.moviesRepository.createActors(
//           actors, movies.dataValues.id);

//       return res.status(200).json(new Response(false, 'Filme salvo com sucesso', null));

//     } catch(e) {
//       return res.status(422).json(new Response(true, e, null));

//     }
//   }
// }
