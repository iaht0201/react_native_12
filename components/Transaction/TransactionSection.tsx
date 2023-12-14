import React, { FunctionComponent } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { TransactionProp, TransactionSectionProp } from "./types";
import TransactionItem from "./TransactionItem";
import RegulartText from "../Texts/RegularText";
import { colors } from "../color";
import SmallText from "../Texts/SmallTetx";
import Icon from "react-native-ionicons";



const TransactionSectionBackground = styled.View`
    width: 100%; 
 
    /* padding: 0 25px; */
    padding-bottom: 15px;
    padding-top: 8px ;
    flex: 3 ; 
    
`
const TranscactionRow = styled.View`
    flex-direction:  row; 
    justify-content: space-between; 
    align-items: center;
    width: 100%;
`
const TransactionList = styled.FlatList`
    width: 100%;
`
const TransactionSection: FunctionComponent<TransactionSectionProp> = (props) => {
    return (

        <TransactionSectionBackground>
            <TranscactionRow style={{ marginBottom: 25 }}>
                <RegulartText textStyle={{ fontSize: 19, color: colors.secondary }}>
                    Transaction
                </RegulartText>
                <SmallText>
                    Recent
                    {/* <Icon name="caret-down" /> */}
                </SmallText>
            </TranscactionRow>
            <TransactionList data={props.data} horizontal={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 25, alignItems: 'center' }} keyExtractor={({ id }: any) => id}
                renderItem={({ item }: any) => <TransactionItem {...item} />}

            />
        </TransactionSectionBackground>

    );

}

export default TransactionSection; 