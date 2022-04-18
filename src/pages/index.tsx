import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Clientes";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 54, '1'),
    new Cliente('Bianca', 12, '2'),
    new Cliente('Carolina', 41, '3'),
    new Cliente('Denis', 23, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {

  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
        <Layout titulo="Cadastro simples">
          <div className="flex justify-end">
            <Botao className="mb-4">Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
          ></Tabela>
        </Layout>
    </div>
  )
}
