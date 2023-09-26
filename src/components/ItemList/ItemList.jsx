import { Item } from "../Item/Item";


export const ItemList = ({ myProducts }) => {

	return myProducts.map((product) => (
		<Item key={product.id} item={product} />
	));
};