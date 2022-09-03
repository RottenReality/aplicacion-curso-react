import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './itemCount.css';

export const ItemCount = ({stock, initial, onAdd, onRemove}) => {


  return (
    <div className='itemCountGc'>
      <div className='itemCount-container'>
        <Button onClick={onRemove}>
            <RemoveIcon fontSize="small" />
        </Button>
        <p>{initial}</p>
        <Button onClick={onAdd}>
            <AddIcon fontSize="small" />
        </Button>
      </div>
      <Button>
        Agregar al carrito
      </Button>
    </div>
  )
}