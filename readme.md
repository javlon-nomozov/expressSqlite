# Express API with SQLite

Node js ni SQlite bilan birga ishlatishni o'rganish uchun proyekt

## Note: this project made for learning node js with Sqlite and can't handle errors

## After running project

### Methods

## Add new car

POST:http://localhost:3010/cars/
And body must required with {"manufacturer": String, "model": String, "year": Number}
Return {"message": "New car added", "data": [ { "id": 12, "manufacturer": "Ford", "model": "Model-T", "year": 1960 } ], "status": 201 }

## Get all car datas

GET:http://localhost:3010/cars/

## Get car data by carId

GET:http://localhost:3010/cars/:carId exammple:http://localhost:3010/cars/10

## Update car data by carId

PATCH:http://localhost:3010/cars/:carId exammple:http://localhost:3010/cars/9
And body must required with {"manufacturer": String, "model": String, "year": Number}

## DELETE car data by carId

DELETE:http://localhost:3010/cars/:carId exammple:http://localhost:3010/cars/9
