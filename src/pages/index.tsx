import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import { useEffect, useState } from "react";
import Cliente from '../core/Cliente';
import ClienteRepositorio from '../core/ClienteRepositorio';
import ColecaoCliente from "@/backend/db/ColecaoCliente";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(() => { 
    repo.obterTodos().then(setClientes)
  }, [])

  // const clientes = [
  //   new Cliente('João', 34, '1'),
  //   new Cliente('Maria', 20, '2'),
  //   new Cliente('Henrique', 35, '3'),
  //   new Cliente('Julia', 28, '4'),
// 17 - 14
  // ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Exclui.... ${cliente.nome}`)
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <div className={`
   flex h-screen justify-center items-center 
   bg-gradient-to-r from-blue-500 to-purple-500
   text-white
   `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" classname="mb-4"
                onClick={() => setVisivel('form')}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>

        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}

      </Layout>
    </div>
  )
}