import { Item } from '../types/Item'

export const items: Item[] = [
    {
        date: new Date(2022, 11, 10),
        category: 'food',
        title: 'McDonalds',
        value: 32.12
    },
    {
        date: new Date(2022, 10, 18),
        category: 'food',
        title: 'Buger King',
        value: 28
    },
    {
        date: new Date(2022, 10, 20),
        category: 'rent',
        title: 'Aluguel Apt',
        value: 2300
    },
    {
        date: new Date(2022, 11, 3),
        category: 'salary',
        title: 'Salário ACME',
        value: 4500
    },
    {
        date: new Date(2022, 10, 1),
        category: 'Freelancer',
        title: 'Página Web with ReactJS',
        value: 1900
    }
]
