import Reat, { FunctionComponent } from "react";

import { Container } from "../components/shared";
import { colors } from "../components/color";
import styled from "styled-components/native";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import background from "./../assets/bgs/background_v1.png";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallTetx";
import RegularButton from "../components/Buttons/RegularButton";

const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary} ; 
    width: 100%  ; 
    height: 100% ; 
 
`
const TopSection = styled.View`
    width: 100%;
    flex: 1  ; 
    max-height: 55%;
   
`
const BottomSection = styled.View`
    width: 100%;
    height: 25px; 
    flex: 1;
    padding: 20px;
    justify-content: flex-end;
`
const TopImage = styled.Image`
    width: 100%; 
    height: 100%;
    object-fit: fill ;
`
const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light" />
            <WelcomeContainer>

                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection>
                    <BigText textStyle={{ width: "50%", marginBottom: 25, color: colors.white }}>
                        Best way to tarck your money </BigText>
                    <SmallText textStyle={{ width: "60%", marginBottom: 25, }}> Best payment method, connect your money to your friend, family.</SmallText>
                    <RegularButton onPress={() => { }} textStyle={{ color: colors.white, fontWeight: '500' }} > Get Started</RegularButton>

                </BottomSection>
            </WelcomeContainer>
        </>
    )
}
export default Welcome; 
