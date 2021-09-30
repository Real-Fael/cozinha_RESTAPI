class PedididosModel {
  constructor(descricao, numMesa, situacao) {
    this.descricaoPedido = descricao;
    this.numMesa = numMesa;
    this.situacao = situacao;
    const date = new Date();
    this.horaData = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
    this.deletado = false;
  }
}

export default PedididosModel;
