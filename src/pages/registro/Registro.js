import React from "react";
import {useState} from "react";
import './registro.css'
import logo from '../../images/logo.png';
import {Link, useLocation} from 'react-router-dom'
import {addTransacoes} from '../Functions'




const Registro = () =>  {

    
   
    const [unidadeSelecionada, setUnidadeSelecionada] = useState(''); // usado para pegar o nome da unidade selecionada
    const handleChange = (event) => {
       
        setUnidadeSelecionada(event.target.value)
      }
    const [valorSuplementado, setValorSuplementado] = useState(''); 
   
    const [transacoes,setTransacoes] = useState([["Camara", 200, "12/04"]]); // vetor de transações novas adicionadas pelo usuário

     
    const location = useLocation()
    const conta  = location.state.cont
    const unidades  = location.state.vetorUnidades
    const contrato = location.state.contract
    


    const handleAdd = e => {
        e.preventDefault();
        const timestamp = Date.now(); // This would be the timestamp you want to format
        const data = (new Intl.DateTimeFormat('pt-BR', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp));
        const transac = []
            transac[0] = unidadeSelecionada
            transac[1] = valorSuplementado
            transac[2] = data
        setTransacoes(transacoes => [...transacoes,transac] ); 
    }

    //funcao que chama api de add transaction
    //pega o vetor[0], vetor[1] e vetor[2] e passa como parametro para addtransaction
    //for( var i=0; i<=2;i++)
    //addTransaction(vetor[0], vetor[1],vetor[2])

    const saveBlockchain = async () => {
          
        console.log(contrato, conta, transacoes)
        //addTransacoes(contrato, conta, transacoes)
        console.log("clicou")
        /* for (var i = 0; i <= vetor.lenght; i++) {

            todoContract.addTransaction(vetor[i][0], vetor[i][1], vetor[i][2], { from: addressAccount }).then(function(result){
            console.log("Value was set to", result.logs[0].args.val);})
        } */
        

    }    


    return(

        <div>
        <div className="container-top">
        <img src={logo}  alt='logo da prefeitura'></img>
        <h1 className='titulo'>Novo Registro <br></br> __________________________________________________________</h1>
        </div>  
        <h2 className='carteira'>Carteira: {conta}</h2>

        <div className="cont-meio">

        <div className='filtros'>
        <form id="transaction" onSubmit={handleAdd}>
        <p>- Unidade Gestora:</p>
        <select defaultValue={0} onChange={handleChange}>
            <option value={0}>Escolher...</option>
            {unidades.map(obj => { return(<option value={obj.name}>{obj.name}</option>)})}
            </select>
        <p>- Valor:</p>
        <input
          type="number" 
          value={valorSuplementado}
          onChange={(e) => setValorSuplementado(e.target.value)}
        />
        <button type="submit" className="btn btn-dark botao-conectar botao-adicionar" >Adicionar</button>
        </form>
        </div>

        <div className="cont-table">
            <table className="table table-striped table-bordered">
            <thead>
            <tr>
                <th>Data</th>
                <th>Unidade Gestora</th>
                <th>Suplementação</th>
            </tr>
            </thead>
            <tbody>
                    {transacoes.map(obj => {
                return(
                <tr>
                    <th scope="row">{obj[2]}</th>
                    <td>{obj[0]}</td>
                    <td>R${obj[1]}</td>
                </tr>
                ) 
            })}

            </tbody>
            </table>
            </div>
            </div>
        

        <div className="buttons-bottom">

        <button className="btn btn-dark botao-conectar" onClick={saveBlockchain}>Salvar na Blockchain</button>

        </div>
        <footer>
        <Link to='/'>VOLTAR</Link>
        </footer>

        </div>

    )

}

export default Registro;