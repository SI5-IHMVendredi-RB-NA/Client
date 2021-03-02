import { Repas } from './../models/Repas';
import DESSERT from './Dessert';
import ENTREE from './Entree';
import SANDWICH from './Sandwich';
import BOISSON from './Boisson';

const REPAS: Repas[] =
[
    {
        id: 1,
        prix: 1,
        entree: ENTREE[0],
        plat: SANDWICH[0],
        dessert: DESSERT[0],
        boisson: BOISSON[3]
    },
    {
        id: 2,
        prix: 1,
        entree: ENTREE[1],
        plat: SANDWICH[1],
        dessert: DESSERT[1],
        boisson: BOISSON[2]
    },
    {
        id: 3,
        prix: 1,
        entree: ENTREE[0],
        plat: SANDWICH[2],
        dessert: DESSERT[1],
        boisson: BOISSON[0]
    },
    {
        id: 4,
        prix: 1,
        entree: ENTREE[2],
        plat: SANDWICH[1],
        dessert: DESSERT[2],
        boisson: BOISSON[1]
    },
    {
        id: 5,
        prix: 1,
        entree: ENTREE[1],
        plat: SANDWICH[2],
        dessert: DESSERT[0],
        boisson: BOISSON[3]
    },
    {
        id: 6,
        prix: 1,
        entree: ENTREE[2],
        plat: SANDWICH[1],
        dessert: DESSERT[2],
        boisson: BOISSON[2]
    },
    {
        id: 7,
        prix: 1,
        entree: ENTREE[2],
        plat: SANDWICH[0],
        dessert: DESSERT[2],
        boisson: BOISSON[0]
    },
]

export default REPAS;
