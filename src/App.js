import './App.css';

import Navbar from './Navbar';
import Palette from './Palette';

function App() {
  return (
		<div>
			<Navbar />
			<main className="flex justify-center items-center">
				<Palette />
			</main>
		</div>
	);
}

export default App;
