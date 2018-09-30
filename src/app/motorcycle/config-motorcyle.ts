import { Motorcycle } from './motorcycle';

export const MOTORCYCLES: Motorcycle[] = [
    {
        id: 1,
        link:"https://www.leboncoin.fr/motos/1498840050.htm/",
        model: 'R 1200 GS lc',
        is_gsa: false,
        color: "black",
        year: 2013,
        kilometer: 23900,
        price: 12500,
        dynamic_pack: false,
        touring_pack: true,
        comfort_pack: true,    
        has_side_cases: true,
        has_top_case: false,
        bmw_luggages: true,
        aluminium_luggages: false     
    },
    {
        id: 2,
        link:"https://www.leboncoin.fr/motos/1495421937.htm/",
        model: 'R 1200 GS lc',
        is_gsa: true,
        color: "green",
        year: 2014,
        kilometer: 58200,
        price: 12990,
        dynamic_pack: true,
        touring_pack: true,
        comfort_pack: true,    
        has_side_cases: true,
        has_top_case: true,
        bmw_luggages: true,
        aluminium_luggages: true     
    }
];
