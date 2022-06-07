import { useEffect } from 'react';
import * as tf from '@tensorflow/tfjs'
import {fetch, bundleResourceIO} from '@tensorflow/tfjs-react-native'

export default function Toolbar({ canvasId }) {
	useEffect(() => {
		// mounting
		clear();

	}, []);

	useEffect(() => {

	async function loadModel(){


		console.log("app started")
		const tfReady = await tf.ready();
		const modelJson = await require("./model/model.json");
		const modelWeight = await require("./model/group1-shard.bin");
		const NumberPredictor = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight))
		setNumberPredictor(NumberPredictor)

	}
	loadModel()
	}, [])

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
		let imgData = ctx.getImageData(0,0,28,28)
		// ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	const predict = () => {
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
	
		let result = NumberPredictor.predict()
		console.log(result)
	}
	return (
		<main className="fixed bottom-0 w-screen flex flex-column justify-center items-center">
			<span onClick={clear} className="tool-btn material-icons p-2 m-5 rounded-md border-2 bg-white hover:cursor-pointer hover:border-black">format_paint</span>
			<a download="image.jpeg" onClick={save} href="#" className="tool-btn material-icons p-2 m-5 rounded-md border-2 bg-white hover:cursor-pointer hover:border-black">save</a>
			<span onClick={predict} className="tool-btn material-icons p-2 m-5 rounded-md border-2 bg-white hover:cursor-pointer hover:border-black">predict</span>
		</main>
	);
}
