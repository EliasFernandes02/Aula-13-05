function PromoPDCRel({ percentage =""}) {
    return (
        <>
            {percentage && (
            <div id="PromoPDCRel">
                <p>{percentage}% off</p>
            </div>

            )}
        </>
    )
}

export default PromoPDCRel