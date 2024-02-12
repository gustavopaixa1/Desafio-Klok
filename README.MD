# DESAFIO KLOK - AUTOMAÇÃO WEB 👨🏽‍💻
------------------
Descrição:  Utilizando as ferramentas que preferir crie um teste automatizado que faça o fluxo de ponta a ponta de um
cliente que:

1. Entre em um grande portal de comércio online (Exemplo: Americanas, Submarino, Magazine Luiza)

2. Faça uma busca por um produto
3. Valide o retorno da busca

> Para a criação dos cenários de testes devem ser considerados casos de sucesso e fluxos alternativos
---

## Cenário de Teste 💼 :

1. Busca com sucesso
   1. Dado: o site de compras "Magazine Luiza"
   2. Quando: pesquiso um produto 
   3. Então: recebo 

## Ferramentas utilizadas 🔧  

<div style="display: inline_block">
  <img align="center" height="30" widith="40" src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" />
    <img align="center" height="30" widith="40" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
    <img align="center" height="30" widith="40" src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" />
  <img align="center" height="30" widith="40" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
</div>



 Foi utilizada a versão `20.11.0` do Node.js e a versão `10.2.4` do npm. Recomendo que se utilize as mesmas versões ou posteriores.

## Instalação 🔧

Execute `npm install` (ou `npm i`) para instalar as dev dependencies do projeto

## Testes ⚙️

Você pode rodar os testes simulando a visão de desktop ou mobile

### Desktop 🖥️

Execute `npm test` (ou `npm t` ) para rodar no modo headless (sem interface gráfica) na visão de desktop.

Ou execute `npm run cy:open` para abrir o Cypress no modo interativo na visão de desktop