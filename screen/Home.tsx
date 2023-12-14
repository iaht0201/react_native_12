import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Container } from "../components/shared";
import { colors } from "../components/color";
import { StatusBar } from "expo-status-bar";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transaction/TransactionSection";


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
            logo: require("../assets/cards/mc.png"),
        },
        {
            id: 2,
            accountNo: "98765",
            balance: 1500.75,
            alias: "Personal",
            logo: require("../assets/cards/mc.png"),
        },
        {
            id: 3,
            accountNo: "11223",
            balance: 5000.45,
            alias: "Savings",
            logo: require("../assets/cards/visa_white.png"),
        },
        // Thêm các đối tượng card khác nếu cần
    ];

    const transactionData = [
        {
            "id": 1,
            "title": "Shopping",
            "subtitle": "Groceries",
            "amount": -50.0,
            "date": "2023-01-15",
            "art": {
                "icon": "shopping_icon.png",
                "background": "#f57db9"
            }
        },
        {
            "id": 2,
            "title": "Salary",
            "subtitle": "Monthly Income",
            "amount": 2000.0,
            "date": "2023-01-31",
            "art": {
                "icon": "salary_icon.png",
                "background": "#e0c065"
            }
        }

    ]

    return (
        <HomeContainer>
            <StatusBar style="dark" />
            <CardSection data={cardsData} />
            <TransactionSection data={transactionData} />
        </HomeContainer>
    );
}
export default Home; 