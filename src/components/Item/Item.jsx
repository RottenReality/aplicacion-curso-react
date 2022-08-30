import React,{useState} from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ pr }) => {

    const [initial, setInitial] = useState(0);

    const onAdd = () => {
		if (initial < pr.stock){
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
			<h3>{pr.title}</h3>
			<img src={pr.pictureUrl} alt={pr.title} />
            <div>{pr.description}</div>
			<div>${pr.price}</div>
            <div>{pr.stock} available</div>
            <button>Ver detalle del producto</button>
            <ItemCount initial={initial} stock={pr.stock} onAdd={onAdd} onRemove={onRemove} ></ItemCount>
		</div>
        
	);
};
