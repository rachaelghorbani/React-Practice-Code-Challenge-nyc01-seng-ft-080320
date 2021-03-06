import React from 'react';

function Sushi(props){
	const sushiEaten = () => {
		return props.consumedSushis.find((sushi) => {
			return sushi.id === props.sushi.id;
		});
	};
	const localClickHandler = () => {
		props.sushiClickHandler(props.sushi);
    };
    
    const decide = () => {
        if(!sushiEaten()){
            return localClickHandler
        } else {
            return null
        }
    }
 
	
		return (
			<div className="sushi">
				<div className="plate" onClick={decide()}>
					{/* Tell me if this sushi has been eaten! */

					sushiEaten() ? null : <img src={props.sushi.img_url} alt="" width="100%" />}
				</div>
				<h4 className="sushi-details">
					{props.sushi.name} - ${props.sushi.price}
				</h4>
			</div>
		);
	
}

export default Sushi;
/* onclick
    1. trigger something as false so that we don't render the sushi image in sushi.js
    2.take the amount of the sushi (will need to send up the sushi obj then and create a consumedSushi obj in app that houses all the consumed sushi also so we can send donw the arry to table) and add it to a total sushi amount in state in app
    3. this amount will need to be sent down to table as props so we can subtract it from the total amount remaining
    4. will need to render one plate for each sushi thats clicked
*/

//if the sushi has not been clicked, ie true, render the image, otherwise dont. the onclick will have to alter something in app to false and then send back those props so that our app knows not to render the sushi image
// Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.
