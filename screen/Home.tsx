import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Container } from "../components/shared";
import { colors } from "../components/color";
import { StatusBar } from "expo-status-bar";
import CardSection from "../components/Cards/CardSection";


const HomeContainer = styled(Container)`
    background-color: ${colors.white};
    flex: 1 ; 
    width: 100%;
`

const Home: FunctionComponent = () => {
    const cardsData = [
        {
            id: 1,
            accountNo: "34343",
            balance: 2000.15,
            alias: "Work",
            logo: require("../assets/bgs/background_transparent.png"),
        },
        {
            id: 2,
            accountNo: "98765",
            balance: 1500.75,
            alias: "Personal",
            logo: require("../assets/bgs/background_transparent.png"),
        },
        {
            id: 3,
            accountNo: "11223",
            balance: 5000.45,
            alias: "Savings",
            logo: require("../assets/bgs/background_transparent.png"),
        },
        // Thêm các đối tượng card khác nếu cần
    ];
    // const cardsData = [
    //     {
    //         id: 1,
    //         accountNo: "34343",
    //         balance: 2000.15,
    //         alias: "Work"
    //     }
    // ]
    return (
        <HomeContainer>
            <StatusBar style="dark" />
            <CardSection data={cardsData}/>
        </HomeContainer>
    );
}
export default Home; 