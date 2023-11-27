export default function PageTitle({ title }) {
    return (
        <>
            {title && <section className=" block w-full pt-24 pb-10 pageTitleBox text-center">
                <div className="container block m-auto">
                    <h1>{title}</h1>
                </div>
            </section>}
        </>
    )
}