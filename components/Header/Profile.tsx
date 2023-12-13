import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ImageSourcePropType, GestureResponderEvent, StyleProp, ViewStyle, ImageStyle } from "react-native";
const StyledView = styled.TouchableOpacity`
    flex-direction: column; 
    height: 45px; ; 
    width: 45px; 
    border-radius: 15px;
`;
const StyledImage = styled.Image`
    object-fit: cover;
    width: 100%;
    height: 100%;
`
interface ProfilePorps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
const Profile: FunctionComponent<ProfilePorps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
            <StyledImage style={props.imgStyle} source={props.img} />
        </StyledView>
    );
}
export default Profile; 