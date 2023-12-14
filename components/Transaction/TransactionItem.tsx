import { FunctionComponent } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import RegulartText from "../Texts/RegularText";
import { TransactionProp } from "./types";
import { colors } from "../color";
const TransactionItem: FunctionComponent<TransactionProp> = (props) => {
    const TransactionTouchable = styled.TouchableHighlight`
        /* height: 100%; */
        width: 100%;
        margin-bottom: 20px;
    `
    const TransactionItemRow = styled.View`
        width: 100% ; 
        /* padding: 0 25px 0 0 ; */
        flex-direction:  row; 
        justify-content: space-between; 
        align-items: center;

    `
    const TransactionItemColumn = styled.View`
        flex-direction: column; 
        
    `
    const BackgroundIcon = styled.View`
        width: 50px; 
        height: 50px;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
    `
    return (
        <TransactionTouchable onPress={() => { }} >
            <TransactionItemRow>
                <TransactionItemRow style={{ justifyContent: "flex-start" }}>
                    <BackgroundIcon style={{ backgroundColor: `${props.art.background}` }}>
                        <RegulartText textStyle={{ color: colors.white }}> 1</RegulartText>
                    </BackgroundIcon>
                    <TransactionItemColumn style={{ marginLeft: 10 }}>
                        <RegulartText textStyle={{ color: colors.black, fontWeight: 'bold' }}> ${props.title}</RegulartText>
                        <RegulartText textStyle={{ color: colors.gray, }}> ${props.subtitle}</RegulartText>
                    </TransactionItemColumn>
                </TransactionItemRow>
                <TransactionItemColumn>
                    <RegulartText>
                        ${props.amount}
                    </RegulartText>
                    <RegulartText>
                        {props.date}
                    </RegulartText>
                </TransactionItemColumn>
            </TransactionItemRow>
        </TransactionTouchable >
    );
}
export default TransactionItem; 