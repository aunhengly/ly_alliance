import React from 'react';
import Card from './Card';

const CardList = ({productArray}) => {
	return (
				<div>
					{
						productArray.map((item, i)=>{
							return (
								<Card
									key={i}
									name={productArray[i].name}
									desc= {productArray[i].desc}
									price= {productArray[i].price}
								/>
							);
						})
					}
				</div>
		);
}

export default CardList;