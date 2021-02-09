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
    }
]

export default REPAS;
