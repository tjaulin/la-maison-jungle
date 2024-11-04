import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

//Props directly in function
function CareScale({scaleValue, careType}) {
    //or function CareScale(props) and declare variable :
    // const {scaleValue, careType} = props
    //Equals to :
    // const scaleValue = props.scaleValue et
    // const careType = props.careType

    const range = [1, 2, 3];
    const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)
    return (
        <div onClick={() => scaleTypeAndValue(careType, scaleValue)}>
            {range.map((rangeElement) =>
                scaleValue >= rangeElement ? <span key={rangeElement.toString()}>{scaleType}</span> : null
            )}
        </div>
    );
}

function scaleTypeAndValue(careType, scaleValue) {
    // return alert(
    //     `Cette plante requiert ${quantityLabel[scaleValue]} ${
    //         careType === 'light' ? 'de lumière' : "d'arrosage"
    //     }`
    // );
}

export default CareScale