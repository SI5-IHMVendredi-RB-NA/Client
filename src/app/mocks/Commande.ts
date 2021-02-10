import { Commande } from '../models/Commande';
import { Status } from '../models/Status';
import CLIENT from './Client';
import REPAS from './Repas';
const COMMANDES: Commande[] =
[
    {
        id: 1,
        repas: REPAS[0],
        client: CLIENT,
        status: Status.PROGRESS
    },
    {
        id: 2,
        repas: REPAS[1],
        client: CLIENT,
        status: Status.PROGRESS
    }
]


export default COMMANDES;
