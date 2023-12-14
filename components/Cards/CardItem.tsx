import { FunctionComponent } from "react";
import { CardProps } from "./types";
import styled from "styled-components/native";
import { ScreenWidth } from "../shared";
import { colors } from "../color";
import card_bg from "../../assets/bgs/background_transparent.png"
import RegulartText from "../Texts/RegularText";
import { TouchableHighlight, View } from "react-native";
import SmallText from "../Texts/SmallTetx";
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
const CardRow = styled.View`
    flex-direction: row; 
    justify-content: space-between;
    align-items: center; 
    width: 100%;
`
const Logo = styled.Image`
    width: 100%; 
    height: 80%; 
    object-fit: contain;
    flex: 1 ; 
`
const CardItem: FunctionComponent<CardProps> = (props) => {
    const handlePress = () => { };
    return (
        <CardBackGround source={card_bg}  >
            <CardTouchable underlayColor={colors.secondary} onPress={handlePress} >
                <TouchableView>
                    <CardRow >
                        <RegulartText textStyle={{ color: colors.white }}>
                            {props.accountNo}
                        </RegulartText>
                    </CardRow>

                    <CardRow>
                        <View style={{ flex: 3 }}>
                            <SmallText >
                                Total balance
                            </SmallText>
                            <RegulartText textStyle={{ color: colors.white, fontWeight: "600" }}>
                                ${props.balance}
                            </RegulartText>
                        </View>
                        <Logo source={props.logo} />
                    </CardRow>
                    
                </TouchableView>
            </CardTouchable>
        </CardBackGround>
    );
}

export default CardItem;