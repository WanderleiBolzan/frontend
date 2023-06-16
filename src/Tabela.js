function Tabela({vetor}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Ativo</th>
                    <th>Data</th>
                    <th>Abertura</th>
                    <th>R$ Máxima</th>
                    <th>R$ Mínima</th>
                    <th>R$ Fechamento</th>
                    <th>R$ Volume</th>                    
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice)=>(
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.ativo}</td>                    
                            <td>{obj.data}</td>
                            <td>{obj.abertura}</td>                                        
                            <td>{obj.maxima}</td>
                            <td>{obj.minima}</td>                                                                    
                            <td>{obj.fechamento}</td>                                                                    
                            <td>{obj.volume}</td>                                                                    
                            <td><button className="btn btn-success">Selecionar</button></td>                            
                        </tr>    
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;