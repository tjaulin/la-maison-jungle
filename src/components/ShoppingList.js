const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => {
                return <li>{plant}</li>
            })}
        </ul>

    );
}

export default ShoppingList