import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        water: 2,
        light: 3,
		cover: monstera,
		price: 15,
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        water: 2,
        light: 2,
		cover: lyrata,
		price: 16,
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isSpecialOffer: true,
		light: 2,
		water: 2,
		cover: pothos,
		price: 6,
	},
	{
		name: 'Menthe',
		category: 'classique',
		id: '4kk',
		water: 1,
        light: 2,
		cover: mint,
		price: 8,
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 2,
		water: 1,
		cover: olivier,
		price: 25,
	},
	{
		name: 'succulent',
		category: 'extérieur',
		id: '6uo',
		light: 1,
		water: 1,
		cover: succulent,
		price: 20,
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isSpecialOffer: true,
		light: 3,
		water: 1,
		cover: basil,
		price: 12,
	},
	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		isSpecialOffer: true,
		light: 2,
		water: 2,
		cover: cactus,
		price: 12,
	},
	{
		name: 'calathea',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 2,
		cover: calathea,
		price: 5,
	}
];