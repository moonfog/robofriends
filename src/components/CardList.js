import React from 'react';
import Card from './Card';
// import {robots} from './robots';

const CardList = ({robots}) => {
  
  return (
    <div>
        {
            robots.map((user , i) => {
                return (
                  < Card key= {i} 
                  id= {robots[i].id } 
                  name= {robots[i].name} 
                  email={robots[i].email }
                  phone={robots[i].phone}
                  city={robots[i].address.city}
                  />);
          
            })
        };
    </div>
  );
}

export default CardList;