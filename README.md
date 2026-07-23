# Teste Técnico PGE - Automação de Testes com Cypress

Projeto de automação de testes E2E desenvolvido utilizando **Cypress**, seguindo uma arquitetura baseada em **Page Object Model (POM)**, com separação de responsabilidades entre páginas, ações, localizadores e massa de dados.

---

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js

---

## Estrutura do projeto

```text
TESTE-TECNICO-PGE
│
├── cypress/
│   ├── actions/
│   ├── e2e/
│   ├── fixtures/
│   ├── pages/
│   ├── support/
│   │   ├── locators/
│   │   ├── commands.js
│   │   └── e2e.js
│   └── cypress.config.js
│
├── package.json
└── README.md
```

---

## Arquitetura

### actions/

Contém os fluxos de negócio utilizados pelos testes.

Responsabilidade:
- Executar cenários completos.
- Reutilizar métodos das páginas.
- Centralizar regras de negócio.

Exemplo:

```javascript
cadastrarAtibuições(dados)
```

---

### e2e/

Contém as suítes de testes automatizados.

Responsabilidade:
- Escrever os cenários utilizando `describe` e `it`.
- Chamar as Actions.
- Realizar as validações (`asserts`).

Exemplo:

```javascript
describe('Cadastro de Atribuições', () => {

    it('Cadastrar atribuição', () => {

    })

})
```

---

### fixtures/

Armazena as massas de dados utilizadas nos testes.

Exemplo:

```json
{
    "dadosAtribuicao": {
        "area": "TI",
        "subArea": "Infraestrutura"
    }
}
```

Vantagens:

- Evita dados fixos no código.
- Facilita manutenção.
- Permite reutilização.

---

### pages/

Representa as páginas do sistema.

Responsabilidade:

- Navegação.
- Preenchimento de formulários.
- Cliques.
- Interações com elementos.

Exemplo:

```javascript
selecionarArea(area)

salvar()

```

---

### support/locators/

Contém apenas os seletores dos elementos.

Responsabilidade:

- Centralizar todos os seletores.
- Facilitar manutenção quando houver alterações na interface.

Exemplo:

```javascript
class cadastroAtribuicaoLocators{

    campoArea = () => cy.get('[name="bond[area]"]'),

    btnSalvar = () => cy.get('[name="commit"]')

}
export default new cadastroAtribuicaoLocators()
```

---

### support/commands.js

Arquivo responsável pelos comandos customizados do Cypress.

Exemplo:

```javascript
cy.login()

```

---

### support/e2e.js

Arquivo carregado automaticamente antes da execução dos testes.

Responsável por:

- Importar os comandos customizados.
- Configurações globais.

---

## Fluxo da arquitetura

```text
Spec (e2e)
│
▼
Action
│
▼
Page
│
▼
Locator
│
▼
Aplicação
```

Cada camada possui apenas uma responsabilidade, facilitando manutenção e reutilização do código.

---

## Executando o projeto

### Instalar as dependências

```bash
npm install
```

---

### Executar o Cypress

Modo interativo

```bash
npx cypress open
```

Modo Headless

```bash
npx cypress run
```

---

## Convenções utilizadas

### Nome dos arquivos

Pages

```
atribuicaoPage.js
menuPage.js
```

Actions

```
atribuicaoAction.js
```

Locators

```
cadastroAtribuicao.js
menu.js
```

Specs

```
cadastroAtribuicao.cy.js
```

Fixtures

```
atribuicao.json
```

---

## Boas práticas adotadas

- Separação de responsabilidades.
- Reutilização de código.
- Massa de dados em fixtures.
- Centralização dos seletores.
- Baixo acoplamento.
- Fácil manutenção.
- Testes independentes.
- Código legível.
- Arquitetura escalável.

---

## Autor

Katarina Mariano

Projeto desenvolvido como parte de um teste técnico utilizando Cypress e JavaScript.
