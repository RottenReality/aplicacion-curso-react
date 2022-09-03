import React,{useState} from "react";
import { ItemCount } from "../ItemCount/ItemCount";
export const ItemDetail = ({detail}) => {

    const [initial, setInitial] = useState(0);

    const onAdd = () => {
		if (initial < detail.stock){
      setInitial(initial + 1);
      console.log("+1")
    }
  };

  const onRemove = () => {
		if (initial > 0){
      setInitial(initial - 1)};
	};

  return (
    <div>
        <h2>{detail.title}</h2>
        <img src={detail.pictureUrl} alt={detail.title}></img>
        <p> {detail.description} </p>
        <p> Precio: {detail.price} </p>
        <p> Disponible: {detail.stock} </p>
        <ItemCount initial={initial} stock={detail.stock} onAdd={onAdd} onRemove={onRemove} ></ItemCount>
    </div>
  )
}
