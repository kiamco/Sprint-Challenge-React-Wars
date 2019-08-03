import React from "react";
import { Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
function Info(props){
    return(
        <Card color='red'>
            <Card.Content>
                <Card.Header>Name: {props.starName}</Card.Header>
                <Card.Meta>Height: {props.height}</Card.Meta>
                <Card.Description>Mass: {props.mass}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default Info;