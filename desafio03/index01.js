// -- Single Responsability Principle (SRP)

class Pedido {
    constructor(id, cliente, itens) {
      this.id = id;
      this.cliente = cliente;
      this.itens = itens;
    }
  }

  class PedidoValidator {
    validar(pedido) {
      if (!pedido.cliente) {
        throw new Error("Cliente obrigatório.");
      }
      if (!pedido.itens || pedido.itens.length === 0) {
        throw new Error("O pedido deve conter pelo menos 1 item.");
      }
    }
  }
  
  class PedidoRepository {
    salvar(pedido) {
      console.log(`Pedido salvo no banco. ID: ${pedido.id}`);
    }
  }

  class NotificacaoService {
    enviarEmail(email, mensagem) {
      console.log(`Email enviado para ${email}: ${mensagem}`);
    }
  }

  class PedidoService {
    constructor(validator, repository, notificacao) {
      this.validator = validator;
      this.repository = repository;
      this.notificacao = notificacao;
    }
  
    criar(pedido) {
      this.validator.validar(pedido);
      this.repository.salvar(pedido);
      this.notificacao.enviarEmail(
        pedido.cliente.email,
        "Seu pedido foi registrado com sucesso!"
      );
    }
  }

  const pedido = new Pedido(
    1,
    { nome: "Anna", email: "anna@email.com" },
    ["Monitor", "Mouse"]
  );
  
  const pedidoService = new PedidoService(
    new PedidoValidator(),
    new PedidoRepository(),
    new NotificacaoService()
  );
  
  pedidoService.criar(pedido);
  