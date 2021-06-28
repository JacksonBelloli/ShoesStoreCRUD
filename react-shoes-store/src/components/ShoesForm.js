import React from 'react'

export default class ClientForm extends React.Component{
    
    constructor(props){
        super(props)
        
        if (this.props.selected){
            this.state = {
                nome: this.props.selected.nome,
                data_nasc: this.props.selected.data_nasc,
                cpf: this.props.selected.cpf,
                endereco: this.props.selected.endereco,
                cidade: this.props.selected.cidade,
                estado: this.props.selected.estado,
                cep: this.props.selected.cep
            }
        } else {
            this.state = {
                nome: "",
                data_nasc: "",
                cpf: 0,
                endereco: "",
                cidade: "",
                estado: "",
                cep: 0
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
        let client = this.state        
        if (this.props.selected == []){
            this.props.put(client)
        } else {
            this.props.post(client)
        }        
        
        this.setState({
            nome: "",
            data_nasc: "",
            cpf: 0,
            endereco: "",
            cidade: "",
            estado: "",
            cep: ""
        })
    }    
    
    render(){  
        
        let selecionado = this.props.selected ? this.props.selected._id : null

        return(
                <form onSubmit={this.submit}>
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="nome" onChange={this.handleInput} value={this.state.nome} name="nome" required/>                        
                    </div>
                    <div class="mb-3">
                        <label for="data_nasc" class="form-label">Data de Nascimento</label>
                        <input type="date" class="form-control" id="data_nasc" onChange={this.handleInput} value={this.state.data_nasc} name="data_nasc" required/>
                    </div> 
                    <div class="mb-3">
                        <label for="cpf" class="form-label">CPF</label>
                        <input type="number" class="form-control" id="cpf" onChange={this.handleInput} value={this.state.cpf} name="cpf" required/>
                    </div>
                    <div class="mb-3">
                        <label for="endereco" class="form-label">Endereço</label>
                        <input type="text" class="form-control" id="endereco" onChange={this.handleInput} value={this.state.endereco} name="endereco" required/>
                    </div>   
                    <div class="mb-3">
                        <label for="cidade" class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="cidade" onChange={this.handleInput} value={this.state.cidade} name="cidade" required/>
                    </div> 
                    <div class="mb-3">
                        <label for="estado" class="form-label">Estado</label>
                        <input type="text" class="form-control" id="estado" onChange={this.handleInput} value={this.state.estado} name="estado" required/>
                    </div>
                    <div class="mb-3">
                        <label for="cep" class="form-label">CEP</label>
                        <input type="number" class="form-control" id="cep" onChange={this.handleInput} value={this.state.cep} name="cep" required/>
                    </div>                   
                    <button type="submit" class="btn btn-primary">Enviar</button>
                    {selecionado}
                </form>                
        )
    }
}