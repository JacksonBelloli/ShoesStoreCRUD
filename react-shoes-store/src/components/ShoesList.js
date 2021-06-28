import userEvent from '@testing-library/user-event'
import React from 'react'
import ClientItem from './ClientItem'

export default class ClientList extends React.Component{
    render(){
        let clients = this.props.clients
        let i = 1
        let conteudo = clients.map((client) => {
            return <ClientItem key={client._id} client={client} id={i++} delete={this.props.delete} select={this.props.select}/>
        })
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Data de Nascimento</th>
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