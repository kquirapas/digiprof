import { useEffect } from 'react';

export default function Toolbar({ canvasId }) {
	useEffect(() => {
		// mounting
		clear();
	}, []);

	const save = async (e) => {
		if (e) {
			const canvas = document.getElementById(canvasId);
			const imageURL = canvas.toDataURL("image/jpeg", 1.0);
			e.target.href = imageURL;
		}
	};
	
	const clear = () => {
		const canvas = document.getElementById(canvasId);
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = "#FFFFFF";
		// ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	return (
		<main className="fixed bottom-0 w-screen flex flex-column justify-center items-center">
			<span onClick={clear} className="tool-btn material-icons p-2 m-5 rounded-md border-2 bg-white hover:cursor-pointer hover:border-black">format_paint</span>
			<a download="image.jpeg" onClick={save} href="#" className="tool-btn material-icons p-2 m-5 rounded-md border-2 bg-white hover:cursor-pointer hover:border-black">save</a>
		</main>
	);
}
