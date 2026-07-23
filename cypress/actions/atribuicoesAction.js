import menuPage from '../pages/menuPage'
import page from '../pages/atribuicaoPage'
import dados from '../fixtures/atribuicao'

class atribuicoesAction {

    cadastrarAtibuições(dados){

        menuPage.acessarTelaAtribuicao()
       
        page.abrirNovaAtribuicao()
       
        page.selecionarArea(dados.areaSelecionada)
       
        page.selecionarOpcaoSemColaborador()
       
        page.selecionaSubAreaColaborador(dados.subAreaColaborador)
      
        page.selecionarAtendente(dados.atendente)
       
        page.selecionarModalidadePresencial()
       
        page.selecionarSO(dados.SO)
       
        page.adicionarAtivo(dados.tombo, dados.status)

        page.salvar()
    }

    validarMensagemSucesso(dados){
        page.validaMensagemSucesso(dados.mensagemSucesso)
    }

}

export default new atribuicoesAction()