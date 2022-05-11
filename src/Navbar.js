import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="bg-blue-500 p-5 text-white text-lg flex items-center justify-between">
			<Link to="/" className="hover:underline font-bold text-3xl">DigiProf</Link>
			<div>
				<Link to="/draw" className="hover:underline">Draw</Link>
			</div>
		</nav>
	);
}
