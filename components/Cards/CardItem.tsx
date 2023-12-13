import { FunctionComponent } from "react";
import { CardProps } from "./types";
import styled from "styled-components/native";
import { ScreenWidth } from "../shared";
import { colors } from "../color";
import card_bg from "../../assets/bgs/background_transparent.png"
const CardBackGround = styled.ImageBackground`
    height: 75%; 
        width: ${ScreenWidth * 0.67}px;
        object-fit: cover;
        background-color: ${colors.pink};
        border-radius:26px; 
        margin-right: 25px; 
        overflow: hidden;
`
const CardTouchable = styled.TouchableHighlight`
    height: 100%; 
    border-radius:  25px; 
`
const TouchableView = styled.View`
    justify-content:  space-between ; 
    align-items: center; 
    padding: 30px; 
    flex: 1 ; 
`

const CardItem: FunctionComponent<CardProps> = (props) => {
    return (
        <CardBackGround source = {card_bg} > 
            
        </CardBackGround>
    );
}

export default CardItem;