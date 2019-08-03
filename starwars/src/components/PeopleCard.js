import React from "react";
import StarInfo from "./infoCard";
import { Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
function StarCard(props){
    return(
        <Card.Group>
            {
                props.info.map(el => <StarInfo starName={el.name} height={el.height} mass={el.mass}/> )
            }
        </Card.Group>
    );
}

export default StarCard;