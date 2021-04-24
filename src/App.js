import React from 'react'
import {FiUsers} from 'react-icons/fi';
import Input from './components/Input';
import Tabela from './components/Table';


import {Container, Header, Logo, HeaderForm, ContainerForm, ContainerLista} from './App_style';


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
      <div style={{padding:30}}>
        <HeaderForm>
          <FiUsers size={20}/><h2 style={{marginLeft: 10, fontSize:20}}>Listar Clientes</h2>
        </HeaderForm>
        <ContainerForm>
          <Input/>
        </ContainerForm>
        <ContainerLista>
          <Tabela />
        </ContainerLista>
        
      </div>
    </Container>
  );
}

export default App;
