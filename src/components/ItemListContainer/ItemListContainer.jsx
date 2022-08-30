import {Typography} from '@mui/material';
import { ItemList } from '../ItemList/ItemList';

const arrayItems = [
  {
    id: 1,
    title: "item1",
    description: "temporal description",
    price: 100,
    stock: 10,
    pictureUrl: "https://sc04.alicdn.com/kf/UTB80j_delahduJk43Jaq6zM8FXan.jpg"
  },
  {
    id: 2,
    title: "item2",
    description: "temporal description",
    price: 100,
    stock: 10,
    pictureUrl: "https://sc04.alicdn.com/kf/UTB80j_delahduJk43Jaq6zM8FXan.jpg"
  },
  {
    id: 3,
    title: "item3",
    description: "temporal description",
    price: 100,
    stock: 10,
    pictureUrl: "https://sc04.alicdn.com/kf/UTB80j_delahduJk43Jaq6zM8FXan.jpg"
  },
];
export const ItemListContainer = ({x}) => {
  return (
    <div>
      <Typography variant='h4' align='center' >{x}</Typography>
      <ItemList itemsArray = {arrayItems}/>
    </div>
    )
}

