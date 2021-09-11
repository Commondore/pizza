import React from 'react';
import Ingredient from './Ingredient/Ingredient';

import './Pizza.css';

const Pizza = ({ingredients}) => {
  let ingList = [];

  for (let ingName in ingredients) {
    if (ingredients[ingName] !== 0) {
      ingList.push(<Ingredient key={ingName} type={ingName} />);
    }
  }

  if(ingList.length === 0 ) {
    ingList = <h3 className="title-empty">Добавьте ингрединеты</h3>;
  }

  return (
    <div className="Pizza">
      {ingList}
    </div>
  );
};

export default Pizza;
