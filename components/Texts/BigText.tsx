import "react-native";
import styled from "styled-components/native";
import { colors } from "../color";
import { FunctionComponent } from "react";
import { TextProps } from "./types";


const StyledText = styled.Text`
    font-size: 35px; 
    color: ${colors.gray} ; 
    text-align: left;
    font-weight: 600;
    /* font-family: 'LatoBold'; */
`

const BigText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyle}>{props.children}</StyledText>
}

export default BigText; 