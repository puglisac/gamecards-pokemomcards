import axios from "axios";
import useLocalStorage from "./useLocalStorage";
import uuid from "uuid";

const useAxios = (baseUrl) => {
	console.log(baseUrl);
	const [ array, setArray ] = useLocalStorage(`${baseUrl}`, []);
	const addItem = async (ext = "") => {
		const response = await axios.get(baseUrl + ext);
		setArray((items) => [ ...items, { ...response.data, id: uuid() } ]);
	};
	const deleteAll = () => {
		setArray([]);
	};
	return [ array, addItem, deleteAll ];
};
export default useAxios;
