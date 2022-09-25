import React from 'react'; 

export default function Product(props) {
  const { item, onAdd } = props;
  return (
    <div>
      <img className="small" src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <div>{item.price} R$</div>
      <div>
        <button onClick={() => onAdd(item)}>Add To Cart</button>
      </div>
    </div>
  );
}