import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import './Item.css'

export const Item = ({ pr }) => {

	const navigation = useNavigate()
	return (
		<Grid className="itemContIn" onClick={()=>navigation(`/item/${pr.id}`) } item xs={12} sm={6} md={4} 
		sx={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '2rem'
			}}
		>
			<img className="imgItemDisp" src={pr.pictureUrl} alt={pr.title} />
			<h3 className="itemTitle">{pr.title}</h3>
			<div className="itemPrice">${pr.price}</div>
		</Grid>
        
	);
};