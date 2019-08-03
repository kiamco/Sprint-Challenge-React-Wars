import React,{ useState } from "react";
import { Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import Styled from "styled-components";

function Info(props){

    const [like,setLike] = useState(0);
    const ButtonContainer = Styled.div`
        margin-top:20px;
    `;

    return(
        <Card color='red'>
            <Card.Content>
                <Card.Header>Name: {props.starName}</Card.Header>
                <Card.Meta>Height: {props.height}</Card.Meta>
                <Card.Description>Mass: {props.mass}</Card.Description>
                <ButtonContainer>
                    <div class="ui right labeled button" role="button" tabindex="0">
                        <button onClick={()=> setLike(like + 1 )} class="ui red button">
                            <i aria-hidden="true" class="heart icon"></i>
                            
                         </button>
                        <a class="ui red left pointing basic label">{like}</a>
                    </div>
                </ButtonContainer>
            </Card.Content>
        </Card>
    )
}

export default Info;