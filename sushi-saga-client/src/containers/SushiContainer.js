import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  

    const filteredSushis = () => {
        return props.sushis.filter(sushi => {
            return sushi.id >= props.minReturnedId && sushi.id <= props.maxReturnedId
        })
    }
       
    
	const renderSushis = () => {
		return filteredSushis().map((sushi) => {
			return <Sushi key={sushi.id} sushi={sushi} sushiClickHandler={props.sushiClickHandler} consumedSushis={props.consumedSushis}/>;
		});
	};
	
		return (
			<Fragment>
				<div className="belt">
					{renderSushis()
					/* 
             Render Sushi components here!
          */
					}
					<MoreButton clickHandler={props.clickHandler}/>
				</div>
			</Fragment>
		);
	
}

export default SushiContainer;
