import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";


export default function Home() {
  const clientes = [
    new Cliente('João', 34, '1'), 
    new Cliente('Maria', 20, '2'), 
    new Cliente('Henrique', 35, '3'), 
    new Cliente('Julia', 28, '4'), 
    
  ]

  return (
    <div className={`
   flex h-screen justify-center items-center 
   bg-gradient-to-r from-blue-500 to-purple-300
   text-white
   `}>
      <Layout titulo="Cadastro Simples">
       <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}