import { Park } from './park.model';

export interface Basic {
    id: number,
    name: string
}

export interface SavePayload {
    park: Park,
    food: Basic,
    species: Basic,
    time: string,
    food_quantity: number,
    species_quantity: number
}

export interface Meal extends SavePayload {
    id: number;
}
