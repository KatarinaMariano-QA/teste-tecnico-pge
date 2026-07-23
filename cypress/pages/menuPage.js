import locators from '../support/locators/menu'

class menuPage {

    acessarTelaAtribuicao(){
        locators.menuAtribuicoes().click()
    }


}

export default new menuPage()