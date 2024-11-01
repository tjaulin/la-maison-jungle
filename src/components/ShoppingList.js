import { plantList } from "../datas/plantList"
import PlantItem from "./PlantItem"
import '../styles/ShoppingList.css'
import Categories from "./Categories"

// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]

function ShoppingList({ cart, updateCart, categoryPlant, setCategoryPlant }) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)


    const filterPlant = plantList.filter(
        (plant) => categoryPlant !== 'default' ? plant.category === categoryPlant : plantList
    )

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories categoryPlant={categoryPlant} setCategoryPlant={setCategoryPlant} />

			<ul className='lmj-plant-list'>
                {filterPlant.map(({ id, cover, name, water, light, price }) => (
                    <div key={id}>
                        <PlantItem id={id} cover={cover} name={name} water={water} light={light} price={price} />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                ))}
            </ul>
			{/* <ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<PlantItem id={plant.id} name={plant.name} cover={plant.cover} water={plant.water} light={plant.light}/>
				))}
			</ul> */}

			{/* <ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul> */}
		</div>
	)
}

export default ShoppingList