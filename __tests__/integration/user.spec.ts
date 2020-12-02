// import * as request from 'supertest';
// import {app} from '../../src/index';
// import {sequelize} from '../../src/db/sequelize';
// describe('', () => {

//   beforeAll(async () => {
//     await sequelize.sync({force: true});
//   });

//   describe('POST /api/v1/create/movie - Create a movie', () => {
//     const url_post = '/api/v1/create/movie';
//     const model = {
//       'nome': 'Senhor do Aneis',
//       'censura': true,
//       'data_lancamento': '2015-05-01',
//       'direcao': 'Stephen Spielber',
//       'atores': [
//       {'nome':'Andre Cabral'},{'nome':'Andre Cabral'},{'nome':'Andre Cabral'},
//       {'nome':'Andre Cabral'},{'nome':'Andre Cabral'},{'nome':'Andre Cabral'},
//       {'nome':'Andre Cabral'},{'nome':'Andre Cabral'},{'nome':'Andre Cabral'},
//       {'nome':'Andre Cabral'}]
//     };

//     it('should returns 200 Status and the created model if User is logged in', async () => {

//       const result = await request(app).post(url_post)
//         .send(model)
//         .set('Accept', 'application/json');

//       expect(result.statusCode).toBe(200);
//     });

//     it('Should returns 404 status code if movie exists', async() => {

//       const result = await request(app)
//         .post(url_post)
//         .send(model)
//         .set('Accept', 'application/json');

//       expect(result.statusCode).toBe(404);
//     });
//     it('Should returns 404 status code if actors with length > 10', async() => {

//       model.atores.push({'nome': 'Andre Cabral'});

//       const result = await request(app)
//         .post(url_post)
//         .send(model)
//         .set('Accept', 'application/json');

//       expect(result.statusCode).toBe(404);
//     });

//     it('Should returns status code 422 if request fails to save to database', async() => {
//       delete model['nome'];
//       model.atores.shift();

//       const result = await request(app)
//         .post(url_post)
//         .send(model)
//         .set('Accept', 'application/json');

//       expect(result.statusCode).toBe(422);
//     });

//   });

//   describe('GET /list/movies/:censura - Get Movies', () => {
//     it('Should returns code 200 and movie', async() => {

//       const result = await request(app)
//         .get('/api/v1/list/movies/true');

//       expect(result.statusCode).toBe(200);
//     });

//     it('Should returns code 422 and not movie', async() => {
//       const result = await request(app)
//         .get('/api/v1/list/movies/11111');

//       expect(result.statusCode).toBe(422);
//     });
//   });
// });
