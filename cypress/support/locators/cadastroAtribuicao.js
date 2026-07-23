class cadastroAtribuicaoLocators{

    btnNovaAtribuicao = () => cy.contains('button', 'Nova Atribuição')

    campoArea = () => cy.get('[name="bond[area]"]')

    campoSubarea = () => cy.get('[name="bond[subarea_id]"]')

    campoColaborador = () => cy.get('#bond_employee_type_colaborador')

    campoSemColaborador = () => cy.get('#bond_employee_type_sem_usuario')

    campoTituloSubArea = () => cy.get('#bond_employee_type_subarea')

    campoAtendente = () => cy.get('.select2-selection')

    campoModalidadePresencial = () => cy.get('#bond_modality_presencial')

    campoModalidadeHomeOffice = () => cy.get('#bond_modality_home_office')

    campoSO = () => cy.get('#so')

    campoSubAreaColaborador = () => cy.get('.select2-selection')

    campoOpcaoSubAreaColaborador = () => cy.get('.select2-results__option')

    campoAtendente = () => cy.get('#attended')

    btnAtribuirAtivo = () => cy.get('#btn_asset')

    campoTombo = () => cy.get('.col-md-0 > .select2 > .selection > .select2-selection')

    selecionaOpcao = () => cy.get('li')

    campoStatusAtivo = () => cy.get('#set_status')
 
    btnSalvar = () => cy.get('[name="commit"]')

    btnCancelar = () => cy.getByText('Cancelar')

    mensagemSucesso = () => cy.get('.bootstrap-growl')

}

export default new cadastroAtribuicaoLocators()