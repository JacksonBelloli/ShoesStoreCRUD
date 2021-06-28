import userEvent from '@testing-library/user-event'
import React from 'react'
import SellerItem from './SellerItem'

export default class SellerList extends React.Component{
    render(){
        let sellers = this.props.sellers
        let i = 1
        let conteudo = sellers.map((seller) => {
            return <SellerItem key={seller._id} seller={seller} id={i++} delete={this.props.delete} select={this.props.select}/>
        })
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Código</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Estado</th>
                        <th scope="col">CEP</th>
                    </tr>
                </thead>
                <tbody>
                    {conteudo}
                </tbody>
            </table>
        )
    }
}