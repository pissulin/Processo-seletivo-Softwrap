import React, {useState, useEffect} from 'react';
import fireDB from '../database/firebase'
import FormularioCadastro from './FormularioCadastro';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FiEdit, FiXCircle} from "react-icons/fi"

function deletar(id){
    if(window.confirm(`Deseja realmente deletar esse cadastro!`)){
        fireDB.child(`clientes/${id}`).remove(
            err => {
                if(err){
                    console.log(err)
                }
            }
        )
        
    }
}

function Tabela(){
    const [clientes, setClientes] = useState({})
    const [idAtual, setIdAtual] = useState('')
    const [atualizou, setAtualizou] = useState(false)

    useEffect(()=>{
        fireDB.child("clientes").on("value", dbPhoto =>{
            if(dbPhoto.val() != null){
                setClientes({
                    ...dbPhoto.val()
                })
            } else {
                setClientes({})
            }
        })


    }, [atualizou])

    return(
        <>
    <FormularioCadastro {...({idAtual, clientes})} />
    <Table striped bordered hover responsive >
        <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Estado Civil</th>
                    <th>CPF</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>Ações</th>
                </tr>
                </thead>
        <tbody>
            {
                Object.keys(clientes).map(id => {
                    return(
                        <tr key={id}>
                                <td>{clientes[id].id}</td>
                                <td>{clientes[id].nome}</td>
                                <td>{clientes[id].idade}</td>
                                <td>{clientes[id].estadoCivil}</td>
                                <td>{clientes[id].CPF}</td>
                                <td>{clientes[id].cidade}</td>
                                <td>{clientes[id].estado}</td>
                                <td>
                                    <button onClick={()=> (setIdAtual(id), setAtualizou(!atualizou))}><FiEdit color="green" size={22} style={{cursor:"pointer", marginRight:10}}/></button>
                                    <button onClick={()=> deletar(id)}><FiXCircle color="red" size={22} style={{cursor:"pointer"}} /></button></td>
                            </tr>
                    )
                })
            }
        </tbody>
    </Table>
    </>
    )
}

export default Tabela