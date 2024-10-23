import { useEffect, useState } from 'react'
import {getProducts} from '../service'
import { message } from 'antd'
import { ProductCard } from './product-card'
export function ProductList() {
    const [list, SetList] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await getProducts()
                const products = response.data.products
                SetList(products)
            } catch (error) {
                message.error(error);
            }

        }
        fetchData();
        
    }, [])
  return (
    <section className='h-full space-y-6 flex flex-col gap-4 p-4'>
        <div className="grid grid-cols-3 max-md:grid-cols-1  gap-4 max-h-full h-full overflow-auto  ">
            {list.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    </section>
  )
}
