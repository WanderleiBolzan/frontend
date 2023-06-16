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

  const users = {
	  id: 0,
	  nome:"",
	  email:"",
	  telefone:"",
	  perfil_Investidor:"",
	  senha:""
  }

  const empresas = {
    id: 0,
	  id_Segmento: 0,
	  razao_Social:"",
	  acao:""  
  }

  const segmentos = {
    id:0,
	  segmento:""
  }

  const carteira ={
  	id:0,
	  dataCompra:"",
	  dataVenda:"",
  	perfil:0
  }

  const carteiraItems = {
		id:0,
  	ativoCarteira:"",
		nome_ativo:"",
	  //client: User,
		valor_contacao: 0.00,
	  qtd_acoes: 0,
	  total_investido: 0.00,
	  rentabilidade: 0.00,
	  risco: 0.00,
	  liquidez: 0.00,
	  volatilidade: 0.00   
  }

  const mairca = {
	  id:0,
	  ativo:"",
	  data:"",
	  Id_Segmento:0,
	  Id_Empresa:0,
	  Abertura:0.00,
	  Maxima:0.00,
	  Minima:0.00,
	  Fechamento:0.00,
	  DataCompra:0.00,
	  Cotacao:0.00,
	  QtdAcoes:0.00,
	  TotInvest:0.00,
	  CotacaoAtual:0.00,
	  ValorAtual:0.00,
	  Rentabilidade:0.00,
	  Risco:0.00,
	  Liquidez:0.00,
	  Volatilidade:0.00
  }

  // - Ativos/Ações---------------------------------------------------------------
  const [btnCadastrar, setbtnCadastrar] = useState(true);
  const [ativos, setAtivos] = useState([]);
  const [objAtivos, setObjAtivos] = useState(ativo);
  //UseEfect - Ativos

  useEffect(()=>{
    fetch("http://localhost:8080/ativos")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setAtivos(retorno_convertido));
  }, []);

  // Use Effect - Usuários--------------------------------------------------------
  const [btnCadastrarUser, setbtnCadastrarUser] = useState(true);
  const [user, setUsers] = useState([]);
  const [objUser, setObjUsers] = useState(user);

  useEffect(()=>{
    fetch("http://localhost:8080/users")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setAtivos(retorno_convertido));
  }, []);

  // Use Effect - empresas---------------------------------------------------------

  const [btnCadastrarEmpresas, setbtnCadastrarEmpresas] = useState(true);
  const [empresa, setEmpresas] = useState([]);
  const [objEmpresa, setObjEmpresas] = useState(empresa);

  useEffect(()=>{
    fetch("http://localhost:8080/empresas")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setAtivos(retorno_convertido));
  }, []);

  // Use Effect - Segmentos-------------------------------------------------------
  const [btnCadastrarSegmentos, setbtnCadastrarSegmentos] = useState(true);
  const [segmento, setSegmentos] = useState([]);
  const [objSegmento, setObjSegmentos] = useState(segmento);

  useEffect(()=>{
    fetch("http://localhost:8080/segmentos")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setAtivos(retorno_convertido));
  }, []);

  // Use Effect - Carteiras-------------------------------------------------------
  const [btnCadastrarCarteiras, setbtnCadastrarCarteiras] = useState(true);
  const [carteiras, setCarteiras] = useState([]);
  const [objCarteiras, setObjCarteiras] = useState(carteira);

  useEffect(()=>{
    fetch("http://localhost:8080/carteiras")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setAtivos(retorno_convertido));
  }, []);
  
  // Use Effect - Carteiras Items -------------------------------------------------------
  const [btnCadastrarCarteirasItem, setbtnCadastrarCarteirasItem] = useState(true);
  const [carteirasItem, setCarteirasItem] = useState([]);
  const [objCarteirasItems, setObjCarteirasItems] = useState(carteiraItems);

  useEffect(()=>{
    fetch("http://localhost:8080/items")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setAtivos(retorno_convertido));
  }, []);
  
  // Use Effect - Mairca -------------------------------------------------------
  const [btnCadastrarMairca, setbtnCadastrarMairca] = useState(true);
  const [maircas, setMairca] = useState([]);
  const [objMairca, setObjMairca] = useState(maircas);

  useEffect(()=>{
    fetch("http://localhost:8080/ahp")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setAtivos(retorno_convertido));
  }, []);
  
  //------------------------------------------------------------------------------

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
