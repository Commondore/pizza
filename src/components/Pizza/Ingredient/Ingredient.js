
function Ingredient({type}) { // olives || cheese
  return (
    <img src={`img/${type}.png`} alt={type} />
  )
}

export default Ingredient
