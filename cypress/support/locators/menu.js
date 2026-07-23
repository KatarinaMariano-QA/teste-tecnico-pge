class MenuLocators{

    menuAtribuicoes = () => cy.get(":nth-child(5) > a > .nav-link > span")


}

export default new MenuLocators()