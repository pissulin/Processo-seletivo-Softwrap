import React, {useEffect, useState} from 'react';
import fireDB from '../database/firebase';
import nextId from "react-id-generator";
import InputMask from "react-input-mask";
import PropTypes from 'prop-types'
import {Input, Form} from './FormularioCadastro-style'


const initialFormState = {
    id: "",
    nome: "",
    idade: "",
    CPF: "",
    estadoCivil: "",
    cidade: "",
    estado: ""
}

const styleInput = {
    width: "160px",
    height:"30px",
    border:"1px solid black",
    margin: "10px  30px 10px 10px",
    paddingLeft: "10px",
    borderRadius: "4px",
}



const FormularioCadastro = (props)=>{

    FormularioCadastro.propTypes = {
        idAtual: PropTypes.string.isRequired,
        clientes: PropTypes.string.isRequired,
    };
    
    const [dados, setDados] = useState(initialFormState);

    const setInput = (newValue) => {
        setDados(() => ({...dados, ...newValue}))
    }
    
    function gravarDados(nome, idade, cpf, estadoCivil, cidade, estado){
        if(nome === "" || idade === "" || cpf ==="" || estadoCivil ==="" || cidade ==="" || estado ===""){
            alert("Favor preencher todos os campos!")
            return
        }
    
        if(props.idAtual ===""){
            let id = nextId(" ")
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
        else{
            fireDB.child(`clientes/${props.idAtual}`).set({
                id: (nextId(" ") - 1),
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
        
    }

    useEffect(()=>{
       if(props.idAtual ===""|| dados.id !==""){
           setDados({
               ...initialFormState
           })
       }
       else {
           setDados({
               ...props.clientes[props.idAtual]
           })
       }
    },[props.idAtual, props.clientes])
    
    return (
        <>
            <Form autoComplete="off" onSubmit={gravarDados}>
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
                    mask="999.999.999-99"
                    maskChar=""
                    name="cpf"
                    value={dados.CPF}
                    onChange={ e => setInput({CPF: e.target.value})}
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
            </Form>
                <Input
                    type="submit" 
                    value={props.idAtual ==="" || dados.id ===""? "SALVAR": "ATUALIZAR" }
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
                            cursor:"pointer",
                    
                        }
                    } 
                    onClick={

                        ()=> gravarDados(
                            dados.nome, 
                            dados.idade, 
                            dados.CPF,
                            dados.estadoCivil,
                            dados.cidade,
                            dados.estado )
                    }
                />
                <Input
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
                            cursor:"pointer",
                       
                        }
                    } 
                    onClick={()=> {
                        setDados(initialFormState)
                    }
                        
                    }
                />
        </>
    )
}

export default FormularioCadastro

