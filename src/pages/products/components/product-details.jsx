import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {productById} from '../service'
import { message } from "antd"
export function ProductDetails() {
    const {id} = useParams()
    const [isLoading, SetLoading] = useState(false)
    const [product, SetProduct] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{

            try {
                const response = await productById(id)
                console.log(response.data)
                //SetProduct(response.data)
            } catch (error) {
             message.error(error)   
            }
        }
    }, [])
  return (
    <div>product-details</div>
  )
}
