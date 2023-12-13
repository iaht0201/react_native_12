
import styled from "styled-components/native"
import { colors } from "./color";
import { Dimensions } from "react-native";
export const Container = styled.View`
    flex: 1 ;  
    align-items : center  ; 
    background-color: ${colors.white};
`
// get width height devices screen 
export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height; 