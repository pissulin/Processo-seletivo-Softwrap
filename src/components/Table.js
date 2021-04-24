import React, {useState, useEffect} from 'react';
import api from '../server/api'

import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FiEdit, FiXCircle} from "react-icons/fi"

function Tabela(){
    const [clientes, setClientes] = useState([])
    useEffect(()=>{
       async function loadClientes(){
            const response = await api.get("/clientes.json")
            setClientes(response.data)
        }
        loadClientes()
    }, [])
    
    return(
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
            {clientes.map((cliente)=> {
                    if(cliente != null){
                        return(
                            <tr key={cliente.id}>
                                <td>{cliente.id}</td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.idade}</td>
                                <td>{cliente.estadoCivil}</td>
                                <td>{cliente.CPF}</td>
                                <td>{cliente.cidade}</td>
                                <td>{cliente.estado}</td>
                                <td>
                                    <FiEdit color="green" size={22} style={{cursor:"pointer", marginRight:10}}/>
                                    <FiXCircle color="red" size={22} style={{cursor:"pointer"}} /></td>
                            </tr>
                        )

                    }
                
            })}        
        </tbody>
    </Table>
    )
}

export default Tabela