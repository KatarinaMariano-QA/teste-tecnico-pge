
import locators from '../support/locators/cadastroAtribuicao'


class atribuicaoPage {

    abrirNovaAtribuicao(){
        locators.btnNovaAtribuicao().click()
    }

    selecionarArea(areaSelecionada){
        locators.campoArea().select(areaSelecionada)
    }

    selecionarOpcaoColaborador(){
        locators.campoColaborador().click()
    }

    selecionarOpcaoSemColaborador(){
        locators.campoSemColaborador().click()
    }

    selecionaSubAreaColaborador(subAreaColaborador){
        locators.campoSubAreaColaborador().click()

        locators.campoOpcaoSubAreaColaborador().contains(subAreaColaborador).click()
    }

    selecionarAtendente(atendente){
        locators.campoAtendente().select(atendente)
    }

    selecionarModalidadePresencial(){
        locators.campoModalidadePresencial().click()
    }

    selecionarSO(SO){
        locators.campoSO().select(SO)
    }

    adicionarAtivo(tombo, status){
        locators.btnAtribuirAtivo().click()

        locators.campoTombo().click().type(tombo)

        locators.selecionaOpcao().contains(tombo).click()

        locators.campoStatusAtivo().select(status)

    }


    validaMensagemSucesso(mensagemEsperada){
        locators.mensagemSucesso().contains(mensagemEsperada)
    }

    salvar(){
        locators.btnSalvar().click()
    }
}

export default new atribuicaoPage()