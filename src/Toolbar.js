import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useState, useEffect } from 'react';

export default function Toolbar({ canvasId }) {
	const save = async () => {
		const storage = getStorage();
		const imagesRef = ref(storage, '/images');

		const canvas = document.getElementById(canvasId);
		const ctx = canvas.getContext('2d');

		canvas.toBlob(blob => {
			const image = new Image();
			image.src = blob;
			uploadBytes(imagesRef, blob).then(snapshot => {
				console.log("Uploaded.");
			});
		})
	};
	
	const clear = () => {
		const canvas = document.getElementById(canvasId);
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	return (
		<main className="fixed bottom-0 w-screen flex flex-column justify-center items-center">
			<span onClick={clear} className="tool-btn material-icons p-2 m-5 rounded-md border-2 bg-white hover:cursor-pointer hover:border-black">format_paint</span>
			<span onClick={save} className="tool-btn material-icons p-2 m-5 rounded-md border-2 bg-white hover:cursor-pointer hover:border-black">save</span>
		</main>
	);
}
