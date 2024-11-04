import "../styles/Categories.css"
import { plantList } from "../datas/plantList";

function Categories({categoryPlant, setCategoryPlant}) {
    // const [categoryPlant, setCategoryPlant] = useState('default');

    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    
    return (
        <div>
            <select value={categoryPlant} onChange={(e) => setCategoryPlant(e.target.value)} className='lmj-categories-select'>
                <option value="default" disabled>Sélectionner une catégorie</option>
                {categories.map(category => {
                    return <option key={category} value={category}>{category}</option>
                })};
            </select>
            <button onClick={() => setCategoryPlant('default')}>Réinitialiser</button>
        </div>
    );
}

export default Categories