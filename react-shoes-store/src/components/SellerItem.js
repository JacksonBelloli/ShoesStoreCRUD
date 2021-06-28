import React from 'react'

export default class Item extends React.Component{        
    
    render(){
        let seller = this.props.seller
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{seller.nome}</td>
                <td>{seller.codigo}</td>
                <td>{seller.cpf}</td>
                <td>{seller.endereco}</td>
                <td>{seller.cidade}</td>
                <td>{seller.estado}</td>
                <td>{seller.cep}</td>
                <td>
                    <button onClick={() => {this.props.delete(seller._id)}} type="button" class="btn btn-danger" style={{marginRight: '7px'}}>Delete</button>
                    <button type="button" class="btn btn-warning" onClick={() => {this.props.select(seller)}} >Alterar</button>
                </td>
            </tr>
        )
    }
}