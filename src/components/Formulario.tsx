
import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "../core/Cliente"
import Botao from './Botao';



interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    classNme="mb-4"
                ></Entrada>
            ) : false}
            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                classNme="mb-4"
            ></Entrada>
            <Entrada
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            ></Entrada>

            <div className="flex justify-end mt-7 ">
                <Botao cor="blue" classname="mr-2"
                onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))} >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao cor= "red" onClick={props.cancelado} >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
// erro de cor no botao