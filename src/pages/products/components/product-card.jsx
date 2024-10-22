import { CgDetailsMore } from "react-icons/cg"
import { FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export function ProductCard({product}) {
    const nav = useNavigate();
    return (
    <>
        <div className="flex flex-col w-full max-h-[300px]   gap-3  bg-slate-50 rounded  hover:bg-slate-100 transition-all duration-150  ">
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
                    </div>
                </div>
                <div className="w-full space-y-2">
                    <div className="flex justify-between w-full items-center rounded-md p-2">
                        <button>
                            <FaStar />
                        </button>
                        <button onClick={() => nav(`/home/products/${product.id}`)}>
                            <CgDetailsMore />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
