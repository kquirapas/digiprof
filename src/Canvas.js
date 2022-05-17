import { useRef } from 'react';

import Toolbar from './Toolbar';

const CANVASID = "canvas";
const CANVASWIDTH = 28;
const BRUSHSIZE = 1;

// viewport
const VW = window.innerWidth;
const VH = window.innerHeight;

const scale = CANVASWIDTH / VW;

export default function Canvas() {
	const canvasRef = useRef(null);

	// useEffect(() => {}, []);

	const draw = (e) => {
		if (e) {

			const posX = e.touches[0].screenX * scale;
			const posY = e.touches[0].screenY * scale;
			console.log(posX, posY);

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
		<>
			<div className="h-screen">
				<canvas width={CANVASWIDTH} height={CANVASWIDTH} ref={canvasRef} onTouchMove={draw} id={CANVASID} className="w-screen h-auto bg-white" />
			</div>
			<Toolbar canvasId={CANVASID} />
		</>
	);
}
