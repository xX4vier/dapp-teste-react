import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {load} from '../Functions';
import logo from '../../images/logo.png';
import './historico.css'
import jsPDF from "jspdf";
import 'jspdf-autotable'




const Historico = () =>  {

    const [addressAccount, setAddressAccount] = useState('0x0')
    const [contrato, setContrato] = useState('teste')
    const [unidades, setUnidade] = useState([])
    const [transacoes, setTransacoes] = useState([])
    const [notAdm, setAdm] = useState(true)
    const [checar, setChecar] = useState('disabled-link')
    const [save, setSave] = useState(true)
    
    const buttonHandler = async() => {

        const [conta, dados, trans, contract] = await load()
        setAddressAccount(conta)
        setUnidade(dados)
        setTransacoes(trans)
        setContrato(contract)
        setSave(false)
        if (conta === "0x0048A531a2A18be72b77d9A3b6eA5C2ABE38F1d1")
        setAdm(false)
        setChecar('')
    }

    function handleSave (){
        const doc = new jsPDF()
        doc.text("Histórico de Suplementações da Prefeitura de Vila Velha",20,10)
        doc.autoTable({html: '#my-table'})
        doc.save('table.pdf')
        return(alert('Sucesso')
        )
        
    }

    

    return(
        <div>

            <div className="container-top-historico">
        
                <img src={logo} alt='logo da prefeitura'></img>
                <h1 className='titulo-historico'>Histórico de Suplementações da <br></br> Prefeitura de Vila Velha <br></br> __________________________________________________________</h1>
            
            </div>
            <button className="btn btn-dark botao-conectar-historico" onClick={buttonHandler} >Conectar</button>
            <div className="carteira-historico">Carteira: {addressAccount} </div>
            
            <div className="cont-table-historico">
            <table className="table table-striped table-bordered" id='my-table'>
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
                    <th scope="row">{obj.date}</th>
                    <td>{obj.name}</td>
                    <td>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                       }).format(obj.valorSuplementado.toNumber())}</td>
                </tr>
                ) 
            })}

            </tbody>
            </table>
            </div>

            
            <div className="container-botoes-historico">
                <div>
                <button disabled = {save} className="btn btn-dark botao-conectar-historico botao-save" onClick={handleSave}>Salvar PDF</button>
                </div>
                <div>
                <Link to='/registro' state={{ cont: addressAccount, vetorUnidades: unidades/* , arquivo: contrato */}} className={checar}><button disabled ={notAdm} className="btn btn-dark botao-conectar-historico botao-registro-historico" >Novo Registro</button></Link>
            </div>
            </div>
        
            
        </div>
    )

}

export default Historico;

//export const vetorUnidades = {unidades}
//export const conta = {addressAccount}