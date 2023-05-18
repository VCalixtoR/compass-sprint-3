# **Avaliação Sprint 3 - Programa de Bolsas Compass UOL / AWS e UFU**

Avaliação da terceira sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

## **Membros da equipe**

- Igor Blanco Toneti
- Paulo Diego da Silva Souza
- Pedro Henrique Resende Ribeiro
- Vinicius Calixto Rocha

## **Sobre o repositório**

Este repositório possui uma solução para a terceira avaliação do curso machine learning para AWS da Compass UOL. O objetivo é a implementação de um sistema que funciona como intermediário de uma API pública. A API escolhida para o projeto foi a [HandWrytten](https://any-api.com/handwrytten_com/handwrytten_com/docs/API_Description). Foram abordadas as tecnologias Node.js, Express, Handlebars, dentre outras. Além disso, foram adotadas boas práticas e padrões de projetos web para a execução da atividade.

## **Início rápido**

Para visualizar a aplicação disponibilizada na web acesse:
* https://equipe2-sprint2-compass.up.railway.app/

Para executar o código localmente:

1. Clone o repositório
2. Abra o terminal no diretório e realize o checkout para a branch `equipe-2`
3. Instale as dependencias do node utilizando o comando `npm install`
4. Insira os arquivos de ambiente(`.env`) necessários para o backend e/ou frontend
5. Execute o projeto node utilizando o comando `npm run dev-windows` para Windows ou `npm run dev`para Linux
Para executar apenas o backend ou frontend adicione o nome após o comando como o exemplo: `npm run dev-windows-backend` ou `npm run dev-windows-frontend`
6. Abra `http://localhost:8080/` para visualizar o frontend ou verifique o backend acessando `http://localhost:5000/`

>**Obs:** Verifique se a versão do node instalada é igual ou superior a v18.16.0. Lembre-se de configurar as variáveis de ambiente.

## **Funcionamento**

Ao carregar a página, será exibida a home da aplicação, contendo uma barra de pesquisa na qual pode-se digitar o ID do cartão que deseja-se procurar. Exemplos de ID's válidos para pesquisa são 87 (Holiday Cheer), 21657 (Love is Love), 72 (Simple Bonjour), dentre outros.

No topo da página há uma navbar contendo as seguintes opções: Home, Aniversário, Dia das mães, Namorados e Motivacional. A funcionalidade de cada opção é descrita a seguir:

- Home: retorna para a página inicial da aplicação
- Aniversário: mostra 4 cartões com o tema aniversário
- Dia das mães: mostra 4 cartões com o tema do dia das mães
- Namorados: mostra 4 cartões com o tema do dia dos namorados
- Motivacional: mostra 4 cartões com o tema motivacional

>**Obs:** Optou-se por mostrar apenas 4 cartões ao selecionar as opções da navbar, pois o retorno da API é um JSON contendo mais de 100 itens para as categorias.

## **Desenvolvimento da atividade**

Inicialmente o repositório da sprint foi clonado e uma nova branch foi criada com o nome `equipe-2`. Após a etapa anterior, foi definido o template de pastas utilizando [html5 boilerplate](https://github.com/h5bp/html5-boilerplate/). Em seguida, iniciou-se a construção do código da aplicação. Foi adotado o seguinte passo-a-passo:

- Elaboração do código para o estilo da página e de arquivos fundamentais para o projeto, como o main.handlebars, cards.js, etc.
- Construção da funcionalidade para retorno de apenas um cartão (presente na homepage)
- Construção da funcionalidade para retorno de cartões por categoria (opções da navbar)
- Refatoração do código para criar um módulo de constantes e corrigir identação do código
- Modificação do readme e do changelog do projeto

## **Dificuldades**

Não houveram dificuldades que impediram o desenvolvimento do projeto, porém duas ocorrências devem ser destacadas:

- Compreender a documentação da API escolhida
- Resolver bugs nas requisições realizadas e retornos de dados da API

Compreender a documentação de uma API se mostrou um desafio, pois é necessário entender a forma de se comunicar corretamente com a mesma. Portanto, a equipe utilizou um tempo para discutir e escolher a API para o projeto.

Durante a elaboração das funcionalidades, a principal fonte de problemas foi realizar a comunicação com a API e utilizar os dados retornados. Utilizou-se diversas dicas de debbug citadas durante o curso de JavaScript, como a impressão das informações no console. Isto permitiu a visualização dos dados de forma simples e tornou possível a seleção dos atributos corretos para os parâmetros das funções.
