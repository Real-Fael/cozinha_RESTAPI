import dataBasePedidos from '../database/DataBasePedidos';
import PedididosModel from '../models/PedidosModel';

class PedidosController {
  pegarPedidos() {
    return dataBasePedidos.pegarPedidos();
  }

  inserirPedido(descricao, numMesa, situacao) {
    const pedido = new PedididosModel(descricao, parseInt(numMesa, 10), parseInt(situacao, 10));
    dataBasePedidos.inserirPedido(pedido);
  }

  alterarPedido(id, descricao, numMesa, situacao) {
    const pedido = new PedididosModel(descricao, parseInt(numMesa, 10), parseInt(situacao, 10));
    dataBasePedidos.alterarPedido(id, pedido);
  }

  deletarPedido(id) {
    dataBasePedidos.deletarPedido(id);
  }
}

export default new PedidosController();
