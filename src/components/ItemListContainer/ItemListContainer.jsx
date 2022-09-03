import {Typography} from '@mui/material';
import { ItemList } from '../ItemList/ItemList';
import { arrayItems } from '../../Mocks/ProductList';


export const ItemListContainer = ({x}) => {
  return (
    <div>
      <Typography variant='h4' align='center' >{x}</Typography>
      <ItemList itemsArray = {arrayItems}/>
    </div>
    )
}

