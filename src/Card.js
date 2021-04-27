import React from 'react'



const Card = (props) => {
    const {name} = props ;

    return (
    <div className='bg-pink dib pa3 br3 ma2 grow bw2 shadow-5 tc'>
        <img alt='face' src={`https://robohash.org/set_set4/${name}?size=250x250`} className="card-img-top" />
        <div>
            <h2>{name}</h2>
       </div>
    </div>
    );
}

export default Card ;

