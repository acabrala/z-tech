import { MoviesController } from './movies'
describe('Movies Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const sut = new MoviesController()
    const httpRequest = {
      body: {
        release_date_of: '01/01/2020',
        censorship: 'true',
        direction: 'any_direction',
        actors: [{
          name: 'any_name'
        }]
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
