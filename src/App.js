import React from 'react'
import {FiUsers} from 'react-icons/fi';
import {Container, Header, Logo, HeaderForm, MenuAcoes, Botao} from './App_style';


function App() {
  return (
    <Container>
      <Header>
        <Logo>Gestor <span style={
          {color:"white", 
          fontWeight:"bolder", 
          fontSize: 36, 
          fontFamily:'sans-serif'
          }}> Clientes </span></Logo>
      </Header>
      <HeaderForm>
        <FiUsers size={20}/><h2 style={{marginLeft: 10, fontSize:20}}>Listar Clientes</h2>
      </HeaderForm>
      <MenuAcoes>
        <Botao width="100px" background="green" color="white">CADASTRAR</Botao>
        <Botao width="100px" background="black" color="white">MAIS AÇÕES</Botao>  
      </MenuAcoes>
    </Container>
  );
}

export default App;
