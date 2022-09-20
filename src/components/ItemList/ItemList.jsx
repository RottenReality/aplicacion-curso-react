import { collection, getDocs, query, where } from 'firebase/firestore';
import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { Item } from "../Item/Item";
import { Loader } from '../Loader/Loader';
export const ItemList = ({itemsArray}) => {

    const [listItems, setListItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const categoryId = useParams().categoryId;

/*     const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (itemsArray.length > 0){
                resolve(itemsArray);
            }
            else{
                reject("Error de productos");
            }
        }, 2000);
	}); */

  

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


  //mock  
/*   useEffect(() => {
		prom
			.then((res) => {
        if(categoryId){
          setListItems(res.filter((item)=> item.category === categoryId))
        }else{
          setListItems(res)
        }
      })
			.catch((rej) => alert(rej))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 3000)
			);

	}, [categoryId]); */
    


  return (
    <div>
      {loading ? <Loader loading={loading}></Loader> : listItems.map((item) => (
				<Item key={item.id} pr={item} />
			))}

			
	</div>
  )
}
