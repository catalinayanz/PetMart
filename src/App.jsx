import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
// import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
		<div className='container--app'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/category/:CategoryId' element={<ItemListContainer />} />
					{/* <Route	path='/items/:ItemId'	element={<ItemDetailContainer />}	/> */}
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
