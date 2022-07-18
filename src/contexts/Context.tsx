import { createContext } from 'react'

type ContextType = {
    name: string,
    age: number
}

type interfaceProps = {
    children: React.ReactNode
}

const initialState = {
    name: 'Wellington',
    age: 40
}

export const Context = createContext<ContextType>(initialState)

export const ContextProvider = ({ children }: interfaceProps) => {
    return(
        <Context.Provider value={initialState}>
            { children }
        </Context.Provider>
    )
}
