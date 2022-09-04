import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Item } from "../Item/Item";
export const ItemList = ({itemsArray}) => {

    const [listItems, setListItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const{idCategoria} = useParams();

    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (itemsArray.length > 0){
                resolve(itemsArray);
            }
            else{
                reject("Error de productos");
            }
        }, 2000);
	});

    useEffect(() => {
		prom
			.then((res) => {
        if(idCategoria){
          setListItems(res.filter((item)=> item.category === idCategoria))
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

	}, [idCategoria]);
    


  return (
    <div>
      {loading ? <p>Loading...</p> : listItems.map((item) => (
				<Item key={item.id} pr={item} />
			))}

			
	</div>
  )
}
