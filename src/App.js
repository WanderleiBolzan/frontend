import { useEffect, useState } from 'react';
import './App.css';
import Tabela from './Tabela';

function App() {

  const ativo = {
    id: 0,
    ativo: '',
    data: Date,
    abertura: 0.00,
    maxima: 0.00,
    minima: 0.00,
    fechamento: 0.00,
    volume: 0.00,
    preco_Ajustado: 0.00,
    maxima_Anterior:0.00,
    minima_Anterior:0.00,
    compra: 0.00,
    venda:0.00,
    resultados:0.00
  }

  const [btnCadastrar, setbtnCadastrar] = useState(true);
  const [ativos, setAtivos] = useState([]);
  const [objAtivos, setObjAtivos] = useState(ativo);

  //UseEfect - Ativos
  useEffect(()=>{
    fetch("http://localhost:8080/ativos")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setAtivos(retorno_convertido));
  }, []);

  // Use Effect - Acoes
  // Use Effect - ativosEmpresasa
  

  const obter = (e)=>{
    setObjAtivos({...objAtivos, [e.target.name]:e.target.value})
  }

  const cadastrar = () => {
    fetch('http://localhost:8080/ativos', {
      method:'post',
      body:JSON.stringify(objAtivos),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if (retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setAtivos([...ativos, retorno_convertido]);
        alert('Título de Ação cadastrado com sucesso');
      }
    })
  }

  return (

    //<Formulario botao ={btnCadastrar} eventoTeclado={obter} cadastrar={cadastrar} />
  
    <div>
      <Tabela vetor={ativos} />
    </div>
  );
}

export default App;
