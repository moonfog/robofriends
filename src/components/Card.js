import React from 'react';
import Button from 'react-bootstrap/Button';

const Card = ({name , email, phone, city, id}) => {
   
    return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robots' src ={`https://robohash.org/${id}?size=200x200`}/>
    
    <div>
        <h2> {name} </h2>
        <p> {email}</p>
        <p> {phone}</p>
        <p> {city}</p>
        <Button variant="primary"> Nieuw contact </Button>
    </div>
    </div>
    
    )
}

export default Card;