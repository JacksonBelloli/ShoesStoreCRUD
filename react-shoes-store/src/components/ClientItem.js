import React from 'react'

export default class Item extends React.Component{        
    
    render(){
        let client = this.props.client
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{client.nome}</td>
                <td>{client.data_nasc}</td>
                <td>{client.cpf}</td>
                <td>{client.endereco}</td>
                <td>{client.cidade}</td>
                <td>{client.estado}</td>
                <td>{client.cep}</td>
                <td>
                    <button onClick={() => {this.props.delete(client._id)}} type="button" class="btn btn-danger" style={{marginRight: '7px'}}>Delete</button>
                    <button type="button" class="btn btn-warning" onClick={() => {this.props.select(client)}} >Alterar</button>
                </td>
            </tr>
        )
    }
}