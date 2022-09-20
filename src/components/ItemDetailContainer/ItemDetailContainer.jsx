import React, {useState,useEffect} from 'react';
//import { arrayItems } from '../../Mocks/ProductList'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';


export const ItemDetailContainer = () => {

  const [prDetail, setPrDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const{id} = useParams();

  /* const prom = new Promise((resolve, reject) => {
    
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(arrayItems)
      }else{
        reject('Error de detalle de producto')
      }

    },2000)
  } */


  useEffect(()=>{
    const prCol = collection(db, "items")
    const refDoc = doc(prCol, id)
    getDoc(refDoc)
    .then((result)=>{
      setPrDetail({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=> console.log(error) )
    .finally(()=>setLoading(false))

  }, [])



/*   useEffect(() => {
		prom
			.then((res) => setPrDetail(res.find((item)=> item.id == id)))
			.catch((rej) => alert(rej))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 3000)
			);

	}, []);
     */

  return (
    <div> 
      
      { loading ? <Loader loading={loading}></Loader>: <ItemDetail detail = {prDetail} />}
        
    </div>
  )
}
