import { postAPIData } from "@/helper/ApiCallFunction"
import { toast } from 'react-toastify'
import Image from "next/image"
export default function ProductItem({ data, setLoading }) {
    let productId = data.id
    const addToCartHandler = (productId) => {
        setLoading(true)
        const apiUrl = `https://fakestoreapi.com/carts`
        const proCartObj = {
            userId: 5,
            products: [{ productId, quantity: 1 }],
            date: '2023-11-27',
        }
        postAPIData(apiUrl, proCartObj, 'json')
            .then((data) => {
                if (data) {
                    console.log('add to cart', data)
                    toast.success('Product Added to Cart Successfully', { autoClose: 2000, })
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            })
            .catch((error) => {
                console.log('add to cart error ', error)
                setLoading(false)
            })
    }
    return (
        <>
            <div className=" flex flex-wrap w-full mb-4 proBoxOuter p-6 flex-col">
                <div className=" block w-full mb-4 proItemImage text-center">
                    {data.image && <Image src={data.image} width={300} height={200} alt="Product Image" />}
                </div>
                <h1 className=" block w-full mb-4">{data.title}</h1>
                <div className="flex w-full mt-auto items-center justify-between">
                    <button className="block text-left addToCarBtn" onClick={() => addToCartHandler(productId)}><span>Add to Cart</span></button>
                    <span className="price block text-right">${data.price}</span>
                </div>
            </div>
        </>
    )
}