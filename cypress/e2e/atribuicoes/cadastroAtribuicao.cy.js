import acao from '../../actions/atribuicoesAction'

describe('Suite de testes de Cadastro de Atribuições', () => {
  

    beforeEach(() => {
        cy.login()      
    })


    it('Cadastrar atribuição para colaborador com todos os campos obrigatórios preenchidos', () => {
      
       cy.fixture('atribuicao').then((dados) => {

            acao.cadastrarAtibuições(dados.dadosAtribuicao)
            acao.validarMensagemSucesso(dados.dadosAtribuicao)
        })       
       
    })

   
})