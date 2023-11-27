'use client'

import PageTitle from "@/components/PageTitle"
import { getAPIData, postAPIData } from "@/helper/ApiCallFunction"
import { useEffect, useState } from "react"
import Loading from "../loading"

export default function CartPage() {
    const [loading, setLoading] = useState(false)
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        const apiUrl = `https://fakestoreapi.com/carts/user/2`
        setLoading(true)
        getAPIData(apiUrl)
            .then((data) => {
                setCartItems(data[0].products)
                setLoading(false)
            })
            .catch((error) => {
                console.log('cart page error', error)
                setLoading(false)
            })
    }, [])
    return (
        <>
            {loading && <Loading />}
            <PageTitle title="Cart" />
            <section className="block w-full pt-10 pb-10">
                <div className="container m-auto">
                    <div className="block w-60 m-auto cartTable text-center">
                        <div className="grid grid-cols-2 justify-between w-full cartHeading">
                            <span className="tableHeading">Product Id</span>
                            <span className="tableHeading">Product Quantity</span>
                        </div>
                        {
                            cartItems && cartItems.map((item, index) => (
                                <div className="grid grid-cols-2 justify-between w-full cartItemRow" key={index}>
                                    <span className="tableText">{item.productId}</span>
                                    <span className="tableText">{item.quantity}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}