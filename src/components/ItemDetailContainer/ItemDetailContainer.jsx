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


  return (
    <div> 
      
      { loading ? <Loader loading={loading}></Loader>: <ItemDetail detail = {prDetail} />}
        
    </div>
  )
}
