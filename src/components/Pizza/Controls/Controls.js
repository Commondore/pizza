import React from 'react';
import ControlItem from './ControlItem/Controltem';

import './Controls.css';

const CONTROLS = {
  cheese: 'сыр',
  olives: 'оливки',
  sausage: 'колбаса',
  mushrooms: 'грибы'
};

const Controls = ({ingredients, price}) => {

  return (
    <div className="pizza-controls">
      <h3 className="pizza-controls__title">Выберите ингредиенты</h3>
      <div className="pizza-control__list">
        {
          Object.keys(CONTROLS).map(type => {
            return (
              <ControlItem
                key={type}
                type={type}
                title={CONTROLS[type]}
                count={ingredients[type]}
              />
            );
          })
        }
      </div>
      <h3>Цена: {price} сом</h3>
    </div>
  );
};

export default Controls;
