export default function MainHeading({ text, alignTxt }) {
    let txtAlign
    if (alignTxt === 'center') {
        txtAlign = 'text-center'
    } else if (alignTxt === 'left') {
        txtAlign = 'text-left'
    } else if (alignTxt === 'right') {
        txtAlign = 'text-right'
    }
    return (
        <>
            <h1 className={` mainHeading block ${txtAlign} w-full mb-4`}>{text}</h1>
        </>
    )
}