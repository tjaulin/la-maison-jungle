//Props directly in function
function CareScale({scaleValue, careType}) {
    //or function CareScale(props) and declare variable :
    // const {scaleValue, careType} = props
    //Equals to :
    // const scaleValue = props.scaleValue et
    // const careType = props.careType

    const range = [1, 2, 3];
    const scaleType = careType === 'light' ? '☀️' : '💧'
    return (
        <div>
            {range.map((rangeElement) =>
                scaleValue >= rangeElement ? <span key={rangeElement.toString()}>{scaleType}</span> : null
            )}
        </div>
    );
}

export default CareScale