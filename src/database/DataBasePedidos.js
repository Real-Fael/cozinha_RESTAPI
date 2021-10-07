import fs from 'fs';
import pedidosBase from './pedidosData.json';

class DataBasePedidos {
  pegarPedidos() {
    return pedidosBase;// converte de JSON para JS Object
  }

  pegarPedido(id) {
    const idInt = parseInt(id, 10);
    if ((idInt >= 0) && (idInt < pedidosBase.pedidos.length)) {
      return pedidosBase.pedidos[idInt];
    }
    throw new Error('incorret Range');
  }

  gravarArquivo() {
    try {
      // escreve no aquivo JSON
      fs.writeFileSync('./src/database/pedidosData.json', JSON.stringify(pedidosBase));
    } catch (e) {
      console.log('erro ao salvar arquivo');
      throw new Error('Database Error');
    }
  }

  inserirPedido(pedido) {
    // insere na lista de pedidos
    // eslint-disable-next-line
    pedido.id = pedidosBase.pedidos.length;
    pedidosBase.pedidos.push(pedido);
    this.gravarArquivo();
  }

  alterarPedido(id, pedido) {
    // verifica se o id esta no range correto
    const idInt = parseInt(id, 10);
    if ((idInt >= 0) && (idInt < pedidosBase.pedidos.length)) {
      // eslint-disable-next-line
      pedido.id = idInt;
      pedidosBase.pedidos[parseInt(id, 10)] = pedido;
    } else {
      throw new Error();
    }
    this.gravarArquivo();
  }

  deletarPedido(id) {
    // verifica se o id esta no range correto
    if ((parseInt(id, 10) >= 0) && (parseInt(id, 10) < pedidosBase.pedidos.length)) {
      pedidosBase.pedidos[parseInt(id, 10)].deletado = true;
    } else {
      throw new Error();
    }
    this.gravarArquivo();
  }
}

export default new DataBasePedidos();
