import React from 'react';

function BeerCard(props) {
    const { index, handleLike, description, showDescription } = props;

    const onClickLike = () => {
        if (handleLike) {
          handleLike(index);
        }
    };

    console.log('showDescription:', showDescription);
    console.log('description:', description);


    return(
        <li id="list">
        <div className="img" >
            <img src={props.image_url} alt={props.name} />
        </div>
        <div className="info" >
                           <span id="name">{props.name} &nbsp; &nbsp;</span>
                           <span id="first_brewed">{props.first_brewed} <br/></span>
                           <span id="tagline">{props.tagline}<br/></span>
                           <span id="abv">{props.abv}  &nbsp; &nbsp; &nbsp; </span>
                           <span className="like"> 
                              <button onClick={onClickLike}>
                                {showDescription ? 'Hide Description' : 'Show Description'}
                              </button>
                              {showDescription && <p>{description}</p>}
                           </span>
        </div>
    </li>
    )
}

export default BeerCard;









