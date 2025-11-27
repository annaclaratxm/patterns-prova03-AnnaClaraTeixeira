// -- Open-Closed Principle (OCP)

class MetodoPagamento {
    pagar(valor) {
      throw new Error("O método pagar() deve ser implementado pela subclasse.");
    }
  }
  
  class PagamentoPix extends MetodoPagamento {
    pagar(valor) {
      console.log(`Pagando R$${valor} via PIX`);
    }
  }
  
  class PagamentoCartao extends MetodoPagamento {
    pagar(valor) {
      console.log(`Pagando R$${valor} com cartão de crédito`);
    }
  }
  
  class PagamentoBoleto extends MetodoPagamento {
    pagar(valor) {
      console.log(`Gerando boleto no valor de R$${valor}`);
    }
  }
  
  class ProcessadorPagamento {
    constructor(metodoPagamento) {
      this.metodoPagamento = metodoPagamento;
    }
  
    processar(valor) {
      this.metodoPagamento.pagar(valor);
    }
  }
  
  const processadorPix = new ProcessadorPagamento(new PagamentoPix());
  processadorPix.processar(100);
  
  const processadorCartao = new ProcessadorPagamento(new PagamentoCartao());
  processadorCartao.processar(250);
  
  const processadorBoleto = new ProcessadorPagamento(new PagamentoBoleto());
  processadorBoleto.processar(75);

  class PagamentoCripto extends MetodoPagamento {
    pagar(valor) {
      console.log(`Pagando R$${valor} usando criptomoeda`);
    }
  }
  
  const processadorCripto = new ProcessadorPagamento(new PagamentoCripto());
  processadorCripto.processar(999);
  