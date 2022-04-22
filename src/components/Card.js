import React from 'react';
import product from './cambogia.jpg';
import './cardStyle.css';

const Card =({name, desc, price}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='photo' src={product}/>
			<h1>{name}</h1>
			<p>{desc}</p>
			<a className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" href="#0"> ${price} </a>
		</div>);
};

export default Card;