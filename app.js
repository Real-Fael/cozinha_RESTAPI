import express from 'express';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() { // controles dos middlewares
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json);// especifica utilização de arquivos .json
  }

  routes() {

  }
}

// exporta o app configurado
export default new App().app;
