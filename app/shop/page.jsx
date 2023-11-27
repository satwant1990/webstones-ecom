'use client'
import PageTitle from "@/components/PageTitle";
import { useEffect, useState } from "react";
import Loading from "../loading";
import ProductItem from "@/components/ProductItem";
import { getAPIData } from "@/helper/ApiCallFunction";

export default function ShopPage() {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const url = `https://fakestoreapi.com/products`
        setLoading(true)
        getAPIData(url)
            .then((data) => {
                if (data) {
                    setProductList(data)
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
            {loading && <Loading />}
            <PageTitle title="Our Shop" />
            <section className=" block w-full pt-10 pb-10">
                <div className="container">
                    <div className=" grid grid-cols-4 gap-6 mt-10">
                        {
                            productList && productList.map((item) => (
                                <ProductItem data={item} key={item.id} setLoading={setLoading} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}