# Agroeasy

Connecting producers to consumers.

## Usage
#### Exposed endpoint:
| Endpoint                                         | Purpose                                                             |
|--------------------------------------------------|---------------------------------------------------------------------|
| GET `/account/findusers`                         | Fetches a list of all users histories                               |
| GET `/account/logout`                            | Logs a user out of the system                                       |
| POST `/account/signin`                           | Signs a user into the system                                        |
| POST `/account/signup`                           | Signs the user up                                                   |
| GET `/producer/findAll`                          | Fetches a list of all the producers                                 |
| GET `/producer/:id`                              | Fetches a producer's details given an uuid                          |
| POST `/producer/create`                          | Creates a new producer in the system                                |
| PUT `/producer/:producersId`                     | Updates a producer's detail given a uuid                            |
| DELETE `/producer/:id`                           | Deletes a producer from the system given a valid uuid               |
| GET `/product/findAll`                           | Fetches a list of all the products                                  |
| GET `/product/:id`                               | Fetches a product's details given an uuid                           |
| POST `/product/create`                           | Creates a new product in the system                                 |
| PUT `/product/:id`                               | Updates a product detail given a uuid                               |
| DELETE `/product/:id`                            | Deletes a product from the system given a valid uuid                |


## Setting up service locally
### Installing dependencies
```
npm i
```

### Running tests
To run our unit tests you can run:

```
npm run test
```

### Running lint
To lint the code run:

```
npm run lint
```

### Running react only code
To lint the code run:

```
npm run dev
```

### Starting the full application
To lint the code run:

```
npm run start-all
```

## Requirements

### Node 8.0+
This service leverages the `async/wait` pattern and requires a newer version of node in order to properly work.

## Authors
* **Eric Okemmadu**
* **Chioma Onyekpere**
* **Obinna Osuji**
