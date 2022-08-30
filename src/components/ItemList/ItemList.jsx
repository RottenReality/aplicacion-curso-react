import React, {useState,useEffect} from 'react';
import { Item } from "../Item/Item";
export const ItemList = ({itemsArray}) => {

    const [listItems, setListItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const promesa = new Promise((resolve, reject) => {
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
		promesa
			.then((res) => setListItems(res))
			.catch((rej) => alert(rej))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 3000)
			);

	}, []);
    


  return (
    <div>
			{listItems.map((item) => (
				<Item key={item.id} pr={item} />
			))}
	</div>
  )
}
