import React from 'react'
import ClientForm from './ClientForm'
import ClientList from './ClientList'
import Axios from 'axios'

export default class Client extends React.Component{
    constructor(props){
        super(props)
        this.BASE_URL = 'http://localhost:8081/api/clientes'
        this.state = {
            clients: [],
            selected: []
        }
    }

    componentDidMount(){
        this.getAllClients()
    }

    getAllClients = async () => {
        try{
            let resultado = await Axios.get(this.BASE_URL)
            this.setState({
                clients: resultado.data
            })
        } catch (err) {
            console.error(err.message)
        }
    }

    saveClient = async (client) => {
        try{
            let result = await Axios.post(this.BASE_URL, client)
            this.getAllClients()
        } catch (err){
            console.error(err.message)
        }
    }

    deleteClient = async (clientId) => {
        try{
            let result = await Axios.delete(this.BASE_URL + '/' + clientId)
            this.getAllClients()
        } catch (err){
            console.error(err.message)
        }
    }

    updateClient = async (client) => {
        try{
            let result = await Axios.put(this.BASE_URL + '/' + this.state.selected._id, client)
            this.getAllClients()
            this.state.selected = []
        } catch (err) {
            console.error(err.message)
        }
    }

    selectClient = (client) => {
        if(this.state.selected == client){
            this.setState({
                selected: []
            })
        } else {
            this.setState({
                selected: client
            })
        }
        console.log(this.state.selected)
    }
    
    render(){
        return(
            <main>
                <div className="container">
                    <div className="row">                        
                        <div>
                           <ClientForm post={this.saveClient} put={this.updateClient} selected={this.state.selected} key={this.state.selected._id}></ClientForm>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col" style={{marginTop: '15px'}}>
                            <ClientList clients={this.state.clients} delete={this.deleteClient} select={this.selectClient}/>
                        </div>                        
                    </div>
                </div>
            </main>
        )
    }
}