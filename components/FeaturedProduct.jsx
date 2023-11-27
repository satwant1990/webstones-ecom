'use client'

import { useEffect, useState } from "react"
import MainHeading from "./Heading"
import { getAPIData } from "@/helper/ApiCallFunction"
import Loading from "@/app/loading"
import ProductItem from "./ProductItem"

export default function FeaturedProducts({ setLoading }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = `https://fakestoreapi.com/products?limit=4`
        setLoading(true)
        getAPIData(url)
            .then((data) => {
                if (data) {
                    setProducts(data)
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            })
            .catch((error) => {
                console.log('featured product error', error)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <section className=" block w-full pt-10 pb-10">
                <div className=" container block m-auto">
                    <MainHeading text="Featured Products" alignTxt={"center"} />
                    <div className=" grid grid-cols-4 gap-6 mt-10">
                        {
                            products && products.map((item) => (
                                <ProductItem data={item} key={item.id} setLoading={setLoading} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}