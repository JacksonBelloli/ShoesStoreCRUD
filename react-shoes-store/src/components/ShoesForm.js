import React from 'react'

export default class ShoesForm extends React.Component{
    
    constructor(props){
        super(props)
        
        if (this.props.selected){
            this.state = {
                modelo: this.props.selected.modelo,
                marca: this.props.selected.marca,
                tamanho: this.props.selected.tamanho,
                quantidade: this.props.selected.quantidade                
            }
        } else {
            this.state = {
                modelo: "",
                marca: "",
                tamanho: 0,
                quantidade: ""
            }     
        }
                   
    }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    submit = (event) => {
        event.preventDefault()
        let shoe = this.state        
        if (!this.props.selected == []){
            this.props.put(shoe)
        } else {
            this.props.post(shoe)
        }        
        
        this.setState({
            modelo: "",
            marca: "",
            tamanho: 0,
            quantidade: ""
        })
    }    
    
    render(){          
        return(
                <form onSubmit={this.submit}>
                    <div class="mb-3">
                        <label for="modelo" class="form-label">Modelo</label>
                        <input type="text" class="form-control" id="modelo" onChange={this.handleInput} value={this.state.modelo} name="modelo" required/>                        
                    </div>
                    <div class="mb-3">
                        <label for="marca" class="form-label">Marca</label>
                        <input type="text" class="form-control" id="marca" onChange={this.handleInput} value={this.state.marca} name="marca" required/>
                    </div> 
                    <div class="mb-3">
                        <label for="tamanho" class="form-label">Tamanho</label>
                        <input type="number" class="form-control" id="tamanho" onChange={this.handleInput} value={this.state.tamanho} name="tamanho" required/>
                    </div>
                    <div class="mb-3">
                        <label for="quantidade" class="form-label">Quantidade</label>
                        <input type="number" class="form-control" id="quantidade" onChange={this.handleInput} value={this.state.quantidade} name="quantidadeendereco" required/>
                    </div>                       
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>                
        )
    }
}