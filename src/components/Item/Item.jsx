import React from "react";
import { useNavigate } from "react-router-dom";

export const Item = ({ pr }) => {

	const navigation = useNavigate()
	return (
		<div>
			<h3>{pr.title}</h3>
			<img src={pr.pictureUrl} alt={pr.title} />
            <div>{pr.description}</div>
			<div>${pr.price}</div>
            <div>{pr.stock} available</div>
				<button onClick={ ()=>navigation(`/detail/${pr.id}`) }> Ver detalle del producto </button>
			</div>
        
	);
};
