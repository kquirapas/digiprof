
function Color({ color }) {
	console.log(color);
	return (
		<span className="rounded-full box-border hover:border-2 hover:border-blue-500 w-10 h-10 my-5 mx-2 hover:cursor-pointer" style={{backgroundColor: `${color}`}}></span>
	);
}

export default function Palette() {
  return (
		<div className="flex justify-center items-center">
			<Color color="#FFAAFF" />
			<Color color="#FFAAFF" />
			<Color color="#FFAAFF" />
			<Color color="#FFAAFF" />
		</div>
	);
}

