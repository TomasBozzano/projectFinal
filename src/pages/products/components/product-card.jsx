import { BiDetail } from "react-icons/bi";
import { FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export function ProductCard({product}) {
    const nav = useNavigate();
    return (
    <>
        <div className="flex flex-col w-full gap-3 bg-slate-50 rounded  hover:bg-yellow-100 transition-all duration-500  ">
            <img src={product.thumbnail} className="w-[150px] mx-auto" />
            <div className="p-2 flex flex-col gap-2 items-start">
                <p className="font-semibold text-gray-600 flex-grow  ">
                {product.title}
                </p>
                <div className="w-full space-y-2">
                    <div className="flex justify-between w-full items-center bg-white rounded-md p-2">
                        <p className=" text-green-500 font-semibold">$ {product.price}</p>
                        <span className="p-2  rounded-md bg-yellow-300 text-xs font-semibold text-black ">
                        {product.category}
                        </span>
                        <p className="text-gray-500">⭐ {product.rating}</p>
                        
                    </div>
                </div>
                <div className="w-full space-y-2">
                    <div className="flex justify-between w-full items-center rounded-md p-2">
                        <button>
                            <FaStar className=""/>
                        </button>
                        <button onClick={() => nav(`/products/${product.id}`)}>
                            <BiDetail />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
