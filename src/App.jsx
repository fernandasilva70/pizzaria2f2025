import { useState } from "react";

function App() {

  const [nome, setNome] = useState("Memphis")

  // var nome = "Neymar Jr";

  return (
    <div>
      <h3>Pizzaria 2F</h3>
      <input
        className="nome"
        name = "nome"
        onChange={(e)=>{setNome(e.target.value)}}
        placeholder="Digite um nome..."
        type="text" />
      <button 
        className="botao"
        onClick={()=>{alert(nome)}} >
          CLIQUE AQUI
      </button>
    </div>
  )
}

export default App
