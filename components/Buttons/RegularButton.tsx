import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components/native";
import { colors } from "../color";
import RegulartText from "../Texts/RegularText";
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";
const ButtonView = styled.TouchableOpacity`
align-items: center; 
background-color: ${colors.primary};
width: 100%;
padding: 20px; 
border-radius: 20px;
`
interface ButtonProps {
    btnStyle?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyle?: StyleProp<TextStyle>;
    children: ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return <>
        <ButtonView onPress={props.onPress} style={props.btnStyle} >
            <RegulartText textStyle={props.textStyle}> {props.children} </RegulartText>
        </ButtonView>
    </>
}
export default RegularButton; 