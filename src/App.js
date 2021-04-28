import React from 'react'
import {FiUsers} from 'react-icons/fi';
import Tabela from './components/Table';


import {Container, Header, Logo, HeaderForm, ContainerLista} from './App_style';


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
      <div style={{paddingTop:10, paddingLeft:30, paddingRight:30}}>
        <HeaderForm>
          <FiUsers size={20}/><h2 style={{marginLeft: 10, fontSize:20}}>Listar Clientes</h2>
        </HeaderForm>
        <ContainerLista>
          <Tabela />
        </ContainerLista> 
      </div>
    </Container>
  );
}

export default App;
