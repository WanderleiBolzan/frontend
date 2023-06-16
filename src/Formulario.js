function Formulario({botao, eventoTeclado, cadastrar}){
    return(
        <form>
            <input type='text' onChange={eventoTeclado} name='ativo' placeholder='Ativo' className="form-control"/>
            <input type='date' onChange={eventoTeclado} name='data'  placeholder='Data'  className="form-control"/>            
            <input type='number' onChange={eventoTeclado} name='abertura' placeholder='Abertura' className="form-control"/>                        
            <input type='number' onChange={eventoTeclado} name='maxima' placeholder='Maxima'  className="form-control"/>                        
            <input type='number' onChange={eventoTeclado} name='minima' placeholder='Minima'  className="form-control"/>                                    
            <input type='number' onChange={eventoTeclado} name='fechamento' placeholder='Fechamento' className="form-control"/>                                    
            <input type='number' onChange={eventoTeclado} name='preco_Ajustado' placeholder='Preco_Ajustado' className="form-control"/>                                    
            <input type='number' onChange={eventoTeclado} name='volume' placeholder='Volume' className="form-control"/>                                    
            <input type='number' onChange={eventoTeclado} name='maxima_Anterior' placeholder='Maxima_Anterior' className="form-control"/>                                    
            <input type='number' onChange={eventoTeclado} name='minima_Anterior' placeholder='Minima_Anterior' className="form-control"/>                                    
            <input type='number' onChange={eventoTeclado} name='venda' placeholder='Venda' className="form-control"/>                                    
            <input type='number' onChange={eventoTeclado} name='compra' placeholder='Compra' className="form-control"/>                                    
            <input type='number' onChange={eventoTeclado} name='resultado' placeholder='Resultado' className="form-control"/> 

            {
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className="btn btn-primary" />
                :
                <div>
                    <input type='button' value='Alterar' className="btn btn-warning"/>
                    <input type='button' value='Remover' className="btn btn-danger"/>
                    <input type='button' value='Cancelar' className="btn btn-secondary" />                                    
                </div>
            }
        </form>
    )
}

export default Formulario;