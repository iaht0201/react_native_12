import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { CardSectionProps } from "./types";
import { FlatList } from "react-native";
import CardItem from "./CardItem";

const CardList = styled.FlatList`
    width: 100%;
    height: 200px;
    flex : 1 ; 
    padding-left:  25px; 
    padding-bottom: 15px ;
`

const CardSection: FunctionComponent<CardSectionProps> = (props) => {
    return (
        <CardList data={props.data} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 25, alignItems: 'center' }} keyExtractor={({ id }: any) => id}
            renderItem={({ item }: any) => <CardItem {...item} />} />
    );
}

export default CardSection; 