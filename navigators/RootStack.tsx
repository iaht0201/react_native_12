import { FunctionComponent } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "../screen/Welcome";
import Home from "../screen/Home";
import { colors } from "../components/color";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import Avi from "../assets/avi/avatar.png";
export type RootStackPramList = {
    Welcome: undefined;
    Home: undefined;
}
const Stack = createStackNavigator();
const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    backgroundColor: colors.white,
                    borderBottomWidth: 0,
                    shadowColor: "transparent",
                    shadowOpacity: 0,
                    elevation: 0,
                    height: 120,
                },
                headerTintColor: colors.secondary,
                headerRightContainerStyle: {
                    paddingRight: 25,
                },
                headerRight: () => (
                    <Profile img={Avi} imgContainerStyle={{ backgroundColor: colors.pink }} />
                ),
            }}>
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{
                    headerTitle: (props) => (
                        <Greeting mainText="Hey Thai!" subTetx="Welcome back" {...props} />
                    ),
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default RootStack; 