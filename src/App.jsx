import './App.css'
import { listCard } from './data/list'
import Portfolio from './comonents/Portfolio/Portfolio';
const data = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    projects: listCard
}

function App() {
  return (
    <>
        <Portfolio data={data}/>
    </>
  )
}

export default App
