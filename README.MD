# DESAFIO KLOK - AUTOMAÇÃO WEB 👨🏽‍💻
------------------
## Descrição do Desafio 📖:  
> Utilizando as ferramentas que preferir crie um teste automatizado que faça o fluxo de ponta a ponta de um cliente que:

1. Entre em um grande portal de comércio online (Exemplo: Americanas, Submarino, Magazine Luiza)

2. Faça uma busca por um produto
3. Valide o retorno da busca


---

## Cenários de Teste 💼 :
Para a criação dos cenários de testes devem ser considerados casos de sucesso e fluxos alternativos
#### Caso de sucesso: Buscar um produto existente por um nome incompleto ✅
    - Dado: que estou no site Magazine Luiza
    - Quando: pesquiso um produto existente através do nome incompleto
    - Então: recebo o resultado da busca feita

#### Caso de sucesso: Buscar um produto existente por um nome completo ✅
    - Dado: que estou no site Magazine Luiza
    - Quando: pesquiso um produto existente através do nome exato
    - Então: recebo o resultado da busca feita

#### Fluxo Alternativo 1: Buscar um produto inexistente ⚠️
    - Dado: que estou no site Magazine Luiza
    - Quando: pesquiso um produto inexistente
    - Então: recebo que o produto procurado não foi encontrado

#### Fluxo Alternativo 2: Adicionar ao carrinho um item sem seguro 🛒
    - Dado: que estou no site Magazine Luiza
    - Quando: pesquiso um item que não tem opção de seguro
    - e clico no botão adicionar ao carrinho
    - Então: o produto é adicionado ao carrinho


## Ferramentas utilizadas 🔧  

<div style="display: inline_block">
  <img align="center" height="30" widith="40" src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" />
    <img align="center" height="30" widith="40" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
    <img align="center" height="30" widith="40" src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" />
  <img align="center" height="30" widith="40" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
</div>


 Para a criação dos testes automatizados, foram utilizadas a versão `20.11.0` do Node.js e a versão `10.2.4` do npm, além da versão 13.6.4 do Cypress. É recomendado que se utilize as mesmas versões ou posteriores.

## Instalação 🔧

Para rodar os testes, é necessário possuir o NodeJs instalado na sua máquina, após isso, execute `npm install` (ou `npm i`) dentro da pasta do projeto para instalar as dependencias de desenvolvimento, a versão do Cypress especificada no projeeto também é instalada automaticamente.

## Testes ⚙️

Você pode rodar os testes  no modo Headless (através do terminal de comando), sem a inface gráfica ou através do modo interativo do Cypress.
    - Execute `npm run cy:test` para rodar no modo headless 
    - Ou execute `npm run cy:open` para abrir o modo interativo do Cypress.


## Resultados
Os resultados dos testes 
