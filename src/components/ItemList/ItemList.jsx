import { collection, getDocs, query, where } from 'firebase/firestore';
import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { Item } from "../Item/Item";
import { Loader } from '../Loader/Loader';
import { Grid } from '@mui/material';
export const ItemList = ({itemsArray}) => {

    const [listItems, setListItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const categoryId = useParams().categoryId;

  

//firebase
  useEffect(()=>{
    const productos = categoryId ? query(collection(db, "items"), where("category","==", categoryId)):collection(db, "items")
    getDocs(productos)
    .then((result)=>{
      const list = result.docs.map((product)=>{
        return{
          id:product.id,
          ...product.data()
        }
      })
      setListItems(list)
    })
    .catch((error)=> console.log(error) )
    .finally(()=>setLoading(false))
  }, [categoryId])

  

  return (
    <Grid container className='itemListGrid'>
      {loading ? <Loader loading={loading}></Loader> : listItems.map((item) => (
				<Item key={item.id} pr={item} />
			))}
	  </Grid>
  )
}
