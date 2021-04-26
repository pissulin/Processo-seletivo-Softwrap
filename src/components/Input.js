import React, {useState} from 'react';
import fireDB from '../database/firebase';
import nextId from "react-id-generator";
import InputMask from "react-input-mask";

import {Input} from './Input-style'



const initialFormState = {
    id: "",
    nome: "",
    idade: "",
    cpf: "",
    estadoCivil: "",
    cidade: "",
    estado: ""
}

const styleInput = {
    width: "160px",
    height:"30px",
    border:"1px solid black",
    margin: "10px  30px 10px 0",
    paddingLeft: "10px",
    borderRadius: "4px"
}

function gravarDados(nome, idade, cpf, estadoCivil, cidade, estado){
    if(nome == "" || idade == "" || cpf =="" || estadoCivil =="" || cidade =="" || estado ==""){
        alert("Favor preencher todos os campos!")
        return
    }
    let id = nextId(" ")
    console.log(id)
    fireDB.child('clientes/').push({
        id: id,
        nome: nome,
        idade: idade,
        CPF: cpf,
        estadoCivil: estadoCivil,
        cidade: cidade,
        estado: estado
    },
    error => {
        if(error){
            console.log(error)
        }
    })
    
}

const UserForm = () => {
    const [dados, setDados] = useState(initialFormState);

    const setInput = (newValue) => {
        setDados(form => ({...dados, ...newValue}))
    }

    return (
        <>
            <form autoComplete="off" onSubmit={gravarDados}>
                <Input
                    required
                    type="text"
                    name="nome"
                    value={dados.nome}
                    onChange={ e => setInput({nome: e.target.value})}
                    label="Nome"
                    placeholder="Nome"
                    
                />
                <InputMask
                    style={styleInput}
                    required
                    mask="999"
                    maskChar=""
                    name="idade"
                    value={dados.idade}
                    onChange={ e => setInput({idade: e.target.value})}
                    label="Idade"
                    placeholder="Idade"
                />
                <InputMask 
                    style={styleInput}
                    required
                    mask="999.999.999-99"
                    maskChar= ''
                    name="cpf"
                    value={dados.cpf}
                    onChange={ e => setInput({cpf: e.target.value})}
                    label="CPF"
                    placeholder="CPF"
                />
                <InputMask
                    style={styleInput} 
                    required
                    type="text"
                    name="estadoCivil"
                    value={dados.estadoCivil}
                    onChange={ e => setInput({estadoCivil: e.target.value})}
                    label="EstadoCivil"
                    placeholder="Estado Civil"
                />
                <InputMask
                    style={styleInput}
                    required 
                    type="text"
                    name="cidade"
                    value={dados.cidade}
                    onChange={ e => setInput({cidade: e.target.value})}
                    label="Cidade"
                    placeholder="Cidade"
                />
                <Input
                    required={true} 
                    type="text"
                    name="estado"
                    value={dados.estado}
                    onChange={ e => setInput({estado: e.target.value})}
                    label="Estado"
                    placeholder="Estado"
                />
            </form>
                <InputMask 
                    type="submit" 
                    value="SALVAR"
                    paddingLeft={0}
                    style={
                        {   
                            ...styleInput,
                            paddingLeft:0, 
                            fontWeight: 900, 
                            backgroundColor: "green", 
                            color:"white", 
                            border:0, 
                            outline:0,
                            cursor:"pointer"
                        }
                    } 
                    onClick={

                        ()=> gravarDados(
                            dados.nome, 
                            dados.idade, 
                            dados.cpf,
                            dados.estadoCivil,
                            dados.cidade,
                            dados.estado )
                        }
                />
                <InputMask 
                    type="submit"
                    value="LIMPAR"
                    style={
                        {   ...styleInput,
                            paddingLeft:0, 
                            fontWeight: 900, 
                            backgroundColor: "red", 
                            color:"white", 
                            border:0, 
                            outline:0, 
                            cursor:"pointer"
                        }
                    } 
                    onClick={()=> {
                        setDados(initialFormState)
                        console.log(dados)
                    }
                        
                    }
                />
        </>
    )
}

export default UserForm