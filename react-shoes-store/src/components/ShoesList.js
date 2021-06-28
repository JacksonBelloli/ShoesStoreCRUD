import userEvent from '@testing-library/user-event'
import React from 'react'
import ShoesItem from './ShoesItem'

export default class ShoesList extends React.Component{
    render(){
        let shoes = this.props.shoes
        let i = 1
        let conteudo = shoes.map((shoe) => {
            return <ShoesItem key={shoe._id} shoe={shoe} id={i++} delete={this.props.delete} select={this.props.select}/>
        })
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Tamanho</th>
                        <th scope="col">Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {conteudo}
                </tbody>
            </table>
        )
    }
}