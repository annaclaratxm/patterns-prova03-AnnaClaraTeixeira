// GRASP -- Polimorfismo

class FormaPagamento {
    pagar(valor) {
      throw new Error("O método pagar() deve ser implementado.");
    }
  }

  class PagamentoPix extends FormaPagamento {
    pagar(valor) {
      console.log(`Pagamento de R$${valor} realizado via PIX.`);
    }
  }

  class PagamentoCartao extends FormaPagamento {
    pagar(valor) {
      console.log(`Pagamento de R$${valor} aprovado no cartão.`);
    }
  }
  
  class PagamentoBoleto extends FormaPagamento {
    pagar(valor) {
      console.log(`Boleto gerado no valor de R$${valor}. Aguardando pagamento.`);
    }
  }
  
  class ProcessadorDePagamento {
    constructor(formaPagamento) {
      this.formaPagamento = formaPagamento;
    }
  
    processar(valor) {
      this.formaPagamento.pagar(valor);
    }
  }
  
  const pagamentoPix = new ProcessadorDePagamento(new PagamentoPix());
  const pagamentoCartao = new ProcessadorDePagamento(new PagamentoCartao());
  const pagamentoBoleto = new ProcessadorDePagamento(new PagamentoBoleto());
  
  pagamentoPix.processar(120);
  pagamentoCartao.processar(350);
  pagamentoBoleto.processar(89);
  

  //actions