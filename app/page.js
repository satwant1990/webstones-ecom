'use client'
import FeaturedProducts from "@/components/FeaturedProduct";
import Image from "next/image";
import { useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(false)
  return (
    <>
      {loading && <Loading />}
      <section className=" block w-full pt-14">
        <Image src="/banner.jpg" width={1920} height={650} alt="Home Banner" />
      </section>
      <FeaturedProducts setLoading={setLoading} />
    </>
  )
}
