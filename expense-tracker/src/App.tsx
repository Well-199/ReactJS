import { useState } from "react"
import { Container, Header, HeaderText, Body } from "./App.styles"
import { Item } from "./types/Item"
import { Category } from "./types/Category"
import { categories } from "./data/categories"
import { items } from "./data/items"
import { getCurrentMonth } from "./helpers/dateFilter"

const App = () => {

	const [list, setList] = useState(items)
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  	return(
		<Container>
			<Header>
				<HeaderText>Sistema Financeiro</HeaderText>
			</Header>
			<Body>

				{/* Área de informações */}

				{/* Área de inserção */}

				{/* Área de itens */}

			</Body>
		</Container>
  	)
}

export default App
