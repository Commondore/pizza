import React from 'react';
import ControlItem from './ControlItem/Controltem';

import './Controls.css';

const CONTROLS = {
  cheese: 'сыр',
  olives: 'оливки',
  sausage: 'колбаса',
  mushrooms: 'грибы'
};

const Controls = ({
  ingredients,
  price,
  add,
  remove,
  purchasable,
  purchase,
  }) => {
  return (
    <div className="pizza-controls">
      <h3 className="pizza-controls__title">Выберите ингредиенты</h3>
      <div className="pizza-control__list">
        {Object.keys(CONTROLS).map((type) => {
          return (
            <ControlItem
              key={type}
              type={type}
              title={CONTROLS[type]}
              count={ingredients[type]}
              add={() => add(type)}
              remove={(event) => remove(event, type)}
            />
          );
        })}
      </div>
      <h3>Цена: {price} сом</h3>
      <div className="pizza-order">
        <button
          className="pizza-order__btn"
          disabled={!purchasable}
          onClick={purchase}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default Controls;
