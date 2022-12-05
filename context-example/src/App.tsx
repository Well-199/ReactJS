import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingUp from "./pages/SingUp"
import ShowData from "./pages/ShowData"

import { ContextProvider } from './contexts/Context'

const App = () => {

  	return(
		<ContextProvider>
			<BrowserRouter>
				<h1>Título da página</h1>
				<hr />
				<Routes>
					<Route path="/" element={ <SingUp /> } />
					<Route path="/exibir" element={ <ShowData /> } />
				</Routes>
			</BrowserRouter>
		</ContextProvider>
  )
}

export default App
