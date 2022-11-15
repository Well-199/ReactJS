import { Category } from "../types/Category"

export const categories: Category = {
    food: {
        title: 'Alimentação',
        color: '#2980b9',
        expense: true
    },

    rent: {
        title: 'Aluguel',
        color: '#d35400',
        expense: true
    },

    salary: {
        title: 'Salário',
        color: '#27ae60',
        expense: false
    },

    freelancer: {
        title: 'Freelas',
        color: '#8e44ad',
        expense: false
    }
}
