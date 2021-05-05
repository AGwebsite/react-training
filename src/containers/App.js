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
        const {catNames, searchField } = this.state
        const filterCats = catNames.filter(cat =>{
            return cat.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(!catNames.length){
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