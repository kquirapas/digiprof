import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="fixed top-0 w-screen p-5 text-white text-lg flex items-center justify-between text-black">
			<Link to="/" className="hover:underline font-bold text-3xl">DigiProf</Link>
			<div>
				<Link to="/draw" className="hover:underline">Draw</Link>
			</div>
		</nav>
	);
}
