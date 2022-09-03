import React, {useState,useEffect} from 'react';
import { Item } from "../Item/Item";
export const ItemList = ({itemsArray}) => {

    const [listItems, setListItems] = useState([]);
    const [loading, setLoading] = useState(true);

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
      <p>{loading ? 'Loading...' : null}</p>

			{listItems.map((item) => (
				<Item key={item.id} pr={item} />
			))}
	</div>
  )
}
