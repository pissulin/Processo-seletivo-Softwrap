# Aplicação criado com "Create React App"

## Rodando a aplicação localmente

### Rodar no terminal o comando:
  - git clone https://github.com/pissulin/Processo-seletivo-Softwrap.git
  - cd Processo-seletivo-Softwrap
  - cd cadastroclientes
  - yarn start


Abrir [http://localhost:3000](http://localhost:3000) para visualizar no browser.

## Resumo do processo de desenvolvimento do teste em questão

 Tecnologias usadas:
  - ReactJS,
  - firebase,
  - Styled-components,
  - Eslintrc

### Processos de desenvolvimentos
  Primeiro tomei conhecimento dos requisitos e das regras de negocios especificados para o teste, tendo isso bem claro eu fui para pesquisa de referencias para poder ter uma ideia para desenvolver a parte do frontend, na parte do frontend quis deixar o mais simples possivel e intuitivo para que qualquer usuario conseguisse usar a aplicação de forma simples e objetiva, já na parte do backend escolhir o firebase por ser facil a comprensão de seu funcionamento e implementação sendo necessários poucos passos para por em produção e integração de um banco de dados realtime com o frontend.<br>
  Escolhir fazer alguns componentes na mão e para isso optei por usar o styled-components por me dá a possibilidade de estilização total e facilitar o reuso dos componentes.<br>
  Seguindo a recomendação do documento de teste em questão, eu usei o eslintrc para deixar o codigo com mais consistencia e assim evitar algum bug futuro. <br>
  Por último aproveitando o firebase e tudo o que ele nos oferece, usei o hosting para por em produção a aplicação e assim deixar disponivel um demo para apresentação.
  
  ### Estruturas de pastas:
    src -- 
         |
         |
         components --
         |           |
         |           FormularioCadastro.js é o componente que tem toda logica de inserir, atualizar e deletar os cadastros.
         |           | 
         |           Table.js é o componente onde tem a logica de leitura das informações no banco do firebase e onde é mostrados as informações em forma de lista    
         |
         database => firebase.js é onde tem as configurações de integração do firebase.
         |
         |
         App.js -- Aqui é onde renderizo todos os componentes já estilizados e faço mais algumas estilizações para quê fique claro as informações mostradas em tela ao usuario
                   
                   
## Deploy 
 Hospedado no Firebase-hosting
 Aplicação-Demo [https://cadastro-clientes-4594c.web.app/](https://cadastro-clientes-4594c.web.app/) 
  
