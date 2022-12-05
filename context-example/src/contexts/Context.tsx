import { createContext } from "react"

// Somente para typescript
type ContextType = {
    name: string
    age: number
}

// Objeto com o estado inicial das variaveis
const initialState = {
    name: 'Wellington',
    age: 40
}

// Context executa a função createContext recebe como tipo ContextType e parametro o initialState
export const Context = createContext<ContextType>(initialState)

type ContextProviderType = {
    children: JSX.Element
}

// O Provider é usado para envolver toda aplicação e o children passa a ser a (aplicação)
export const ContextProvider = ({ children }: ContextProviderType) => {
    return (
        <Context.Provider value={initialState}>
            { children }
        </Context.Provider>
    )
}