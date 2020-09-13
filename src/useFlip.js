import { useState } from "react";

const useFlip = () => {
	const [ state, setState ] = useState(true);
	const toggle = () => {
		setState((state) => !state);
	};
	return [ state, toggle ];
};
export default useFlip;
