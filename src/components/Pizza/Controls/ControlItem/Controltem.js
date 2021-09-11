import './ControlItem.css';

const ControlItem = ({type, title, count}) => {
  return (
      <div className="pizza-control__item">
        <img src={`img/${type}-icon.png`} alt="" className="pizza-control__img" />
        <h4 className="pizza-control__title">{title}</h4>
        {count > 0 ? <div className="ingredient-count">{count}</div> : null}
      </div>
  );
};
export default ControlItem;
