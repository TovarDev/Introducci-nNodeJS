# NODEPOP

Arrancar la aplicación: 

```sh
npm install
```

En producción:

```sh
npm start
```

En desarrollo:

```sh
npm run dev
```

## Reiniciar la Base de Datos:

```sh
npm run initdb
```
¡¡ATENCIÓN!! Este comando elimina la base de datos y la vuelve a iniciar con los artículos de initDB.anuncios.json


## Metodos del API

El API se accede en /api

- Crear anuncios:
```sh
POST /api/anuncios
```
- Listar anuncios:
```sh
GET /api/anuncios
```

Filtros:
- Paginación (skip / limit):
```sh
http://localhost:3000/api/anuncios?skip=2&limit=1
```
- Ordenación (sort):
```sh
http://localhost:3000/api/anuncios?sort=nombre
```
- Filtrar por tag:
```sh
http://localhost:3000/api/anuncios?tags=motor
```
- Filtrar por anuncio en venta (true) o en busqueda (false):
```sh
http://localhost:3000/api/anuncios?venta=true
```
- Filtrar por nombre (que empiece por dato buscado):
```sh
http://localhost:3000/api/anuncios?nombre=i
```
- Listar los tags existentes:
```sh
http://localhost:3000/api/anuncios?select=tags -_id
```
