import { Link } from "react-router-dom";
import "./Item.css"
import PropTypes from 'prop-types';

export const Item = ({ item }) => {
	return (
		<div className='card'>
			<h3 className='card--title'>{item.title}</h3>
			<img className='card--img' src={item.img} alt={item.title} />
			<div className='card--price'>$ {item.price}</div>
			<Link className='card--more' to={`/items/${item.id}`}>
				Ver Mas
			</Link>
		</div>
	);
};

Item.propTypes = {
	item: PropTypes.string.isRequired,
}