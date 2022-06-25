## Documentações

1. Projeto criado utilizando o Vite

    - Comando `npm create vite@latest`
    - Selecionar a opção
        > react
    - Selecionar a opção
        > react-ts

2. Feito isso, rodar o comando `npm install` para instalar as dependências iniciais do projeto.

3. Próximo pacote a ser instalado é o tailwind. Para isso, rodar o comando `npm i tailwindcss postcss autoprefixer -D`. Será necessário apenas para o desenvolvimento.

4. Próximo comando é o `npx tailwindcss init -p` para iniciar os arquivos de configuração do `tailwind` e do `postcss`.

    - No arquivo de configuração do `tailwind`, precisam ser informados quais serão os arquivos que serão estilizados.
    - Criar na pastar `src` uma nova pasta `styles` e dentro um arquivo `global.css` para criar o setup do `tailwind`. Segue o código:

    ```
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
    ```

    - Também é interessante possuir as extensões do `tailwind` e do `postcss` instaladas no seu VsCode.

5. Como o consumo dos dados serão feitas por `Graphql` é necessário instalar os devidos pacotes. Rodar o comando `npm i @apollo/client graphql`.

    - O Apollo ajuda nas requsições para o Graphql e ainda trás vantagens de controle de cache.
    - Criar uma pasta chamada `lib` e dentro colocar um arquivo chamado `apollo.ts` para a configuração do cliente. Vide o código para mais detalhes.
    - Para realizar requisições, utilizar o hook `useQuery` passando a query criada. Exemplo:

    ```
    const GET_LESSONS_QUERY = gql`
        query {
            lessons {
                id
                title
            }
        }
    `

    const { data } = useQuery(GET_LESSONS_QUERY);
    ```

    - Ainda é possível, por meio do generics, definir o retorno do `useQuery`. Para isso crie uma interface com os dados e passe para hook usando a notação de generics. Vide o código para exemplo.

<hr>

## Customizações do CSS do Tailwind

1. No arquivo `tailwind.config.js`, é possível sobrescrever cores que estão previamente definidas, com novas tonalidades se for necessário. Para isso dentro da propriedade `theme`, criar uma nova propriedade `extend` que também é um objeto, contendo uma propriedade `colors`. Essa é a propriedade que definimos as cores que serão sobrescritas. Por exemplo, podemos definir uma propriedade `red` que será um objeto, e dentro dela uma nova propriedade `500` com um valor hexadecimal de um tom de vermelho que queremos. A partir de então, todas as classes que utilizarem `*-red-500` do `tailwind`, irão utilizar a nossa tonalidade.
    - Vide o [arquivo](tailwind.config.js) mencionado para entender melhor.

<br>

2. Para definir uma fonte nova também é possível adicionando uma propriedade `fontFamily` no `extend`. Nessa propriedade de fontes, definimos por exemplo, as `sans` com as fontes que queremos.
    - Vide o [arquivo](tailwind.config.js) mencionado para entender melhor.

<br>

3. Também é possível customizar tamanhos diretamente ao chamar uma classe do `tailwind` no componente. Por exemplo, podemos definir uma classe `w-[348px]` em algum componente. Essa classe irá aplicar um `width` de 348px.
    - Os valores passados dentro dos colchetes são utilizados, nesses casos.

<hr>

## Bibliotecas adicionais

1. Phosphor - Biblioteca de ícones.
    - Instalar usando o comando `npm i phosphor-react`
    - A biblioteca já tem os componentes com os ícones que queremos, basta importar e utilizar como um componente qualquer.
        - O tamanho do ícone é possível definir com a propriedade `size` do componente.

<br>

2. Date-FNS - Biblioteca para trabalhar com datas.
    - Instalar usando o comando `npm i date-fns`
    - Exemplo de uso no componente [Lesson](src/components/Lesson.tsx).

<br>

3. Vime - Biblioteca de player de vídeos.
    - Instalar usando o comando `npm i @vime/core @vime/react`
        - Essa biblioteca está para ser alterada, então antes de instalar, verifique no site oficial se ainda é o mesmo comando.
        - Essa biblioteca pode causar problemas com a verão >= 18 do React. Se necessário, adicione a instrução `--force` no final do comando de instalação para conseguir instalar, mesmo que acuse alguns alertas.
    - Exemplo de uso no componente [Video](src/components/Video.tsx).

<br>

4. React-Router-DOM - Biblioteca de roteamento - Instalar usando o comando `npm i react-router-dom`.
    - É necessário criar um componente [Router](src/Router.tsx) para o mapeamento das rotas.

 <hr>

## Sobre o Apollo

Como as requisições serão feitas de dentro dos componentes, é necessário adicionar um `provider` englobando a nossa aplicação. Veja o arquivo [App](src/App.tsx) para uma explicação visual, e leia a documentação oficial para mais detalhes.

<hr>

## Sobre o Router-DOM

Igual ao `Apollo`, o `Router-DOM` do React também precisa ter seu provider englobando os componentes que vão utilizar ele. Veja o arquivo [App](src/App.tsx) e a documentação oficial para mais detalhes.

<hr>

### Anotações aleatórias

1. Sem definir um `display: block;` para um `span`, algumas outras propriedades do css como `margin` não aplicam seu efeito. (Realmente não sabia isso).
