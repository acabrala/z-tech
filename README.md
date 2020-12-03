# z-tech

Projeto para teste de back-end para Z-tech

# Configuração do Ambiente

- Executar comando docker-compose up --build -d

# Development EndPoints
http://localhost:3000

# API EndPoints

## Para criar um filme

### POST /api/v1/create/movie.

- Exemplo do request

```{ 
    "nome": "Harry Potter",
    "direcao": "Chris Columbus",
    "censura": false,
    "data_lancamento": "2000-12-31",
    "atores": [ { "nome": "Emma Watson" },
    { "nome": "Daniel Radclife" } ] }.
   ```
  
- Resposta

{
    "error": false,
    "message": "Filme salvo com sucesso",
    "data": null
}

## Para listar filmes

### GET /api/v1/list/movies/:censura(mandar false ou true)

Caso mande um false será listado os filmes com valor de censura false, equivalente a SEM CENSURA
ou true para filme CENSURADO.

- Resposta

```{
    "error": false,
    "message": "Operação realizada",
    "data": [{
            "id": 1,
            "nome": "'Harry Potter",
            "data_lancamento": "2000-12-31",
            "censura": false,
            "direcao": "Chris Columbus",
            "elenco": [
                {
                    "id": 1,
                    "nome": "Emma Watson",
                    "id_filme": 1
                },
                {
                    "id": 2,
                    "nome": "Daniel Radclife",
                    "id_filme": 1
                }]
}

```

# Comandos

## npm run dev
- Para iniciar o projeto local na máquina

## npm run test
- Para rodar os testes do projeto


# Projeto web para realizar testes.

https://github.com/acabrala/z-tech-web
