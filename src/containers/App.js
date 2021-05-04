import { render } from '@testing-library/react'
import React, {Component} from 'react' ;
import CardList from '../components/CardList' ;
import SearchBox from '../components/SearchBox' ;
import'./App.css'
import catNames from 'cat-names';
import Scroll from '../components/Scroll' ;

class App extends Component {

    constructor(){
        super()
        this.state = {
            catNames: [],
            searchField : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json()})
        .then( users => this.setState({catNames : users}));
        // .then(cat => this.setState({catNames : cat}));
    }

    onSearchChange = (event) =>{
        this.setState({searchField : event.target.value})
    }

    render(){
        const filterCats = this.state.catNames.filter(catNames =>{
            return catNames.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.catNames.length === 0){
            return <h1 className='f1'>LoAdinG</h1>
        }else{
            return(
                <div className='tc'>
                    <h1 className="f1">KITTeNs FRieNDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList catNames={filterCats}/>
                    </Scroll>
                   
                </div>
            )

        }
      
    }  
}

export default App ;