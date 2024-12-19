# Testes E2E com Cypress para o DevFinance

Este repositório contém testes de ponta a ponta (E2E) utilizando Cypress para a aplicação Dev Finance. Esses testes validam as funcionalidades principais da aplicação, como adicionar, atualizar e excluir transações financeiras.

## Tecnologias Utilizadas

-   **Cypress**(https://www.cypress.io/)**:** Framework de testes E2E.
-   **Node.js:** Ambiente de execução para JavaScript no backend.  
-   **npm:** Gerenciador de pacotes para instalação de dependências.   
-   **HTML e CSS:** Para a interface da aplicação Dev Finance utilizada nos testes.

## Estrutura do Projeto

-   `**cypress/**`: Contém todos os arquivos relacionados aos testes.    
    -   `**e2e/**`: Onde estão localizados os casos de teste E2E.        
        -   `**finances.cy.js**`: Contém os testes para a aplicação Dev Finance.            
    -   `**fixtures/**`: Inclui dados de teste e mocks, se necessário.        
    -   `**support/**`: Inclui configurações e comandos personalizados reutilizáveis.        
        -   `**commands.js**`: Define comandos personalizados do Cypress, como criar transações.            
        -   `**e2e.js**`: Configurações globais para os testes E2E.    
 

## O que foi feito

-   Implementação de testes para cadastrar transações de entrada e saída.    
-   Validação da exclusão de transações.    
-   Configuração inicial do Cypress e criação de comandos personalizados.    
-   Geração automática de relatórios e gravação de vídeos das execuções.

## Notas Gerais

-   O projeto utiliza o Cypress como framework de testes de ponta a ponta.    
-   Os testes foram projetados para garantir que as funcionalidades principais da aplicação Dev Finance estejam funcionando corretamente.    
-   Comandos personalizados do Cypress são definidos em `support/commands.js` para simplificar tarefas repetitivas, como criar transações.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

