import { useState, useRef, useEffect } from 'react';

import Toolbar from './Toolbar';

const CANVASID = "canvas";
const BRUSHSIZE = 20;


// viewport
const VW = window.innerWidth;
const VH = window.innerHeight;

export default function Canvas() {
	const canvasRef = useRef(null);

	// useEffect(() => {}, []);

	const draw = (e) => {
		if (e) {

			const posX = e.touches[0].screenX;
			const posY = e.touches[0].screenY;
			console.log(e, posX, posY);

			const ctx = canvasRef.current.getContext("2d");
			ctx.fillStyle = "#000000";

			ctx.beginPath();
			ctx.arc(posX, posY, BRUSHSIZE, 0, 2 * Math.PI);

			ctx.strokeStyle = "#000000";
			ctx.stroke();
			ctx.fill();
		}
	};

	return (
		<div>
			<canvas width={VW} height={VH} ref={canvasRef} onTouchMove={draw} id={CANVASID} className="bg-white" />
			<Toolbar canvasId={CANVASID} />
		</div>
	);
}
