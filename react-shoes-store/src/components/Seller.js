import React from 'react'
import SellerForm from './SellerForm'
import SellerList from './SellerList'
import Axios from 'axios'

export default class Seller extends React.Component{
    constructor(props){
        super(props)
        this.BASE_URL = 'http://localhost:8081/api/vendedores'
        this.state = {
            sellers: [],
            selected: []
        }
    }

    componentDidMount(){
        this.getAllSellers()
    }

    getAllSellers = async () => {
        try{
            let resultado = await Axios.get(this.BASE_URL)
            this.setState({
                sellers: resultado.data
            })
        } catch (err) {
            console.error(err.message)
        }
    }

    saveSeller = async (seller) => {
        try{
            let result = await Axios.post(this.BASE_URL, seller)
            this.getAllSellers()
        } catch (err){
            console.error(err.message)
        }
    }

    deleteSeller = async (sellerId) => {
        try{
            let result = await Axios.delete(this.BASE_URL + '/' + sellerId)
            this.getAllSellers()
        } catch (err){
            console.error(err.message)
        }
    }

    updateSeller = async (seller) => {
        try{
            let result = await Axios.put(this.BASE_URL + '/' + this.state.selected._id, seller)
            this.getAllSellers()
            this.state.selected = []
        } catch (err) {
            console.error(err.message)
        }
    }

    selectSeller = (seller) => {
        if(this.state.selected == seller){
            this.setState({
                selected: []
            })
        } else {
            this.setState({
                selected: seller
            })
        }
    }
    
    render(){
        return(
            <main>
                <div className="container">
                    <div className="row">                        
                        <div>
                           <SellerForm post={this.saveSeller} put={this.updateSeller} selected={this.state.selected} key={this.state.selected._id}/>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col" style={{marginTop: '15px'}}>
                            <SellerList sellers={this.state.sellers} delete={this.deleteSeller} select={this.selectSeller}/>
                        </div>                        
                    </div>
                </div>
            </main>
        )
    }
}