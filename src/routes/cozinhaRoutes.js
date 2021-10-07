import { Router } from 'express'; // importa o gerenciador de rotas do express

import pedidosController from '../controllers/PedidosController';

const router = new Router();// constroi o objeto

router.get('/', (req, res) => {
  res.send(pedidosController.pegarPedidos());
});

router.put('/', (req, res) => {
  if (!req.body.id
    || !req.body.situacao) { return res.sendStatus(400); }

  try {
    pedidosController.alterarSituacaoPedido(req.body.id, req.body.situacao);
  } catch (e) {
    return res.sendStatus(400);
  }

  // console.log(req.body);
  return res.send('Alterado com Sucesso');
});

export default router;
