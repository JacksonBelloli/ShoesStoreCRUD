import React from 'react'
import ShoesForm from './ShoesForm'
import ShoesList from './ShoesList'
import Axios from 'axios'

export default class Shoes extends React.Component{
    constructor(props){
        super(props)
        this.BASE_URL = 'http://localhost:8081/api/calcados'
        this.state = {
            shoes: [],
            selected: []
        }
    }

    componentDidMount(){
        this.getAllShoes()
    }

    getAllShoes = async () => {
        try{
            let resultado = await Axios.get(this.BASE_URL)
            this.setState({
                shoes: resultado.data
            })
        } catch (err) {
            console.error(err.message)
        }
    }

    saveShoes = async (shoe) => {
        try{
            let result = await Axios.post(this.BASE_URL, shoe)
            this.getAllShoes()
        } catch (err){
            console.error(err.message)
        }
    }

    deleteShoes = async (shoetId) => {
        try{
            let result = await Axios.delete(this.BASE_URL + '/' + shoetId)
            this.getAllShoes()
        } catch (err){
            console.error(err.message)
        }
    }

    updateShoes = async (shoe) => {
        try{
            let result = await Axios.put(this.BASE_URL + '/' + this.state.selected._id, shoe)
            this.getAllShoes()
            this.state.selected = []
        } catch (err) {
            console.error(err.message)
        }
    }

    selectShoes = (shoe) => {
        if(this.state.selected == shoe){
            this.setState({
                selected: []
            })
        } else {
            this.setState({
                selected: shoe
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
                           <ShoesForm post={this.saveShoes} put={this.updateShoes} selected={this.state.selected} key={this.state.selected._id}/>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col" style={{marginTop: '15px'}}>
                            <ShoesList shoes={this.state.shoes} delete={this.deleteShoes} select={this.selectShoes}/>
                        </div>                        
                    </div>
                </div>
            </main>
        )
    }
}