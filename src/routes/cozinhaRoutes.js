import { Router } from 'express'; // importa o gerenciador de rotas do express

const router = new Router();// constroi o objeto

router.get('/', (req, res) => {
  res.send('hallo GET');
});

router.post('/', (req, res) => {
  res.send('hallo POST');
});

export default router;
