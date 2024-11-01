import "../styles/Cart.css"
import { useState, useEffect } from 'react'

function Cart({cart, updateCart}) {
    const monsteraPrice = 8
    const [isOpen, setIsOpen] = useState(false);
    const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
    //OU 
    // const cartState = useState(0)
    // const cart = cartState[0]
    // const updateCart = cartState[1]

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total]);

    return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								- {name} {price}€ x{amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart