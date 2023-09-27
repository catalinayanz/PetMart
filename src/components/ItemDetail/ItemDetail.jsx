import "./ItemDetail.css";
import PropTypes from 'prop-types';

export const ItemDetail = ({ itemFiltered }) => {
	return (
		<section className='container--itemDetail'>
			<h3 className='itemDetail--title'>{itemFiltered.title}</h3>
			<img
				className='itemDetail--img'
				src={itemFiltered.img}
				alt={itemFiltered.title}
			/>
			<div className='itemDetail--price'>
				Price $ {itemFiltered.price}
			</div>
			<div className='itemDetail--stock'>Stock {itemFiltered.stock}</div>
			<div className='itemDetail--description'>
				{itemFiltered.description}
			</div>
		</section>
	);
};

ItemDetail.propTypes = {
	itemFiltered: PropTypes.string.isRequired,
}