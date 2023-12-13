import { FunctionComponent } from "react";
import { StyleProp } from "react-native";
import { TextStyle } from "react-native";
import styled from "styled-components/native";
import RegulartText from "../Texts/RegularText";
import { colors } from "../color";
import SmallText from "../Texts/SmallTetx";

interface GreetingProps {
    mainText: string;
    subTetx: string;
    mainTextStyle?: StyleProp<TextStyle>;
    subTextStyle?: StyleProp<TextStyle>;

}
const StyleView = styled.View`
    flex-direction: column; 
    flex: 1 ;
    justify-content:center;
`

const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (
        <StyleView>
            <RegulartText textStyle={[{ color: colors.secondary, fontSize: 22 }, props.mainTextStyle]} > {props.mainText}</RegulartText>
            <SmallText textStyle={[{ color: colors.gray }, props.subTextStyle]} > {props.subTetx}</SmallText>

        </StyleView>

    );
}
export default Greeting; 