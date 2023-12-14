import { ImageSourcePropType } from "react-native";

export interface TransactionProp {
    id: number;
    title: string;
    subtitle: string;
    amount: number;
    date: string;
    art: {
        icon: string;
        background: string;

    }
}

export interface TransactionSectionProp {
    data: Array<TransactionProp>;
}
export interface TransactionAviProp {
    icon: any;
    background: string;
}