import CareScale from "./CareScale"
import "../styles/PlantItem.css"

function PlantItem({name, cover, id, light, water, price}) {
    return (

        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>

        //OLD
        // <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
        // <li key={id} className='lmj-plant-item'>
        //     <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
        //     {name}
        //     {/* {isSpecialOffer && <div className="lmj-sales">Soldes</div>} */}
        //     <div>
		// 		<CareScale onClick={handleClicke} careType='water' scaleValue={water} />
		// 		<CareScale careType='light' scaleValue={light} />
		// 	</div>
        // </li>
    );
}

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function handleClicke(e) {
    console.log('✨ Ceci est mon event :', e)
}

export default PlantItem