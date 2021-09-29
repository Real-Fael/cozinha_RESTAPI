import express from 'express';
import cozinhaRoutes from './src/routes/cozinhaRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() { // controles dos middlewares
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());// especifica utilização de arquivos .json
  }

  routes() {
    // configura a rota cozinha utilizando os methods de Routes

    this.app.use('/cozinha', cozinhaRoutes);
  }
}

// exporta o app configurado
export default new App().app;
