import React, {useState} from 'react';
import {Input} from './Input-style'


const initialFormState = {
    nome: "",
    idade: "",
    cpf: "",
    estadoCivil: "",
    cidade: "",
    estado: ""
}

const UserForm = () => {
    const [dados, setDados] = useState(initialFormState);

    const setInput = (newValue) => {
        setDados(form => ({...dados, ...newValue}))
    }

    return (
        <>
            <form>
                <Input 
                    name="nome"
                    value={dados.nome}
                    onChange={ e => setInput({nome: e.target.value})}
                    label="Nome"
                    placeholder="Nome"
                />
                <Input 
                    name="idade"
                    value={dados.idade}
                    onChange={ e => setInput({idade: e.target.value})}
                    label="Idade"
                    placeholder="Idade"
                />
                <Input 
                    name="cpf"
                    value={dados.cpf}
                    onChange={ e => setInput({cpf: e.target.value})}
                    label="CPF"
                    placeholder="CPF"
                />
                <Input 
                    name="estadoCivil"
                    value={dados.estadoCivil}
                    onChange={ e => setInput({estadoCivil: e.target.value})}
                    label="EstadoCivil"
                    placeholder="Estado Civil"
                />
                <Input 
                    name="cidade"
                    value={dados.cidade}
                    onChange={ e => setInput({cidade: e.target.value})}
                    label="Cidade"
                    placeholder="Cidade"
                />
                <Input 
                    name="estado"
                    value={dados.estado}
                    onChange={ e => setInput({estado: e.target.value})}
                    label="Estado"
                    placeholder="Estado"
                />
            </form>
                <Input 
                    type="submit" 
                    value="SALVAR"
                    style={
                        {
                            padding: 0, 
                            fontWeight: 900, 
                            backgroundColor: "green", 
                            color:"white", 
                            border:0, 
                            outline:0,
                            cursor:"pointer"
                        }
                    } 
                />
                <Input 
                    type="submit"
                    value="LIMPAR"
                    style={
                        {
                            padding: 0, 
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