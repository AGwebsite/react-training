import React from 'react' ;
import Card from './Card' ;



const CardList = ({catNames}) => {
 

    return (
        <div>
            {
             catNames.map((user, i) =>{
             return <Card key={i} name={catNames[i].name} />
                })
            }
        </div>
    )

}

export default CardList