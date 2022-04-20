import React, {useState} from "react";
import {load} from '../Functions';



const Historico = () =>  {

    const [addressAccount, setAddressAccount] = useState()

    function buttonHandler() {

        const conta = load()
        setAddressAccount(conta)
    }

    return(
        <div>
            <button onClick={buttonHandler} >Conectar</button>
            {setAddressAccount('retorno da função load')}
            <div>Carteira: {addressAccount} </div>
            
        </div>
    )

}

export default Historico;