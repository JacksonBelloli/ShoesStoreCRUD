import React from 'react'

export default class Item extends React.Component{        
    
    render(){
        let shoe = this.props.shoe
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{shoe.modelo}</td>
                <td>{shoe.marca}</td>
                <td>{shoe.tamanho}</td>
                <td>{shoe.quantidade}</td>
                <td>
                    <button onClick={() => {this.props.delete(shoe._id)}} type="button" class="btn btn-danger" style={{marginRight: '7px'}}>Delete</button>
                    <button type="button" class="btn btn-warning" onClick={() => {this.props.select(shoe)}} >Alterar</button>
                </td>
            </tr>
        )
    }
}