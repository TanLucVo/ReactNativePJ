import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./src/Components/Home";
import store from "./src/Components/Redux/store";
import { Provider as StoreProvider } from "react-redux";
import SearchBarInput from "./src/Components/SearchBar";
import AllList from "./src/Components/Screen/AllList";
import Today from "./src/Components/Screen/Today";
import Important from "./src/Components/Screen/Important";
import Completed from "./src/Components/Screen/Completed";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <StoreProvider store={store}>
            <Stack.Navigator
                screenOptions={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,

                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "black",
                        shadowRadius: 0,
                        shadowOffset: {
                            height: 0,
                        },
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        title: "Danh sách",
                    }}
                />
                <Stack.Screen
                    name="AllList"
                    component={AllList}
                    options={{
                        title: "Tất cả",
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="Today"
                    component={Today}
                    options={{
                        title: "Hôm nay",
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="Important"
                    component={Important}
                    options={{
                        title: "Quang trọng",
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="Completed"
                    component={Completed}
                    options={{
                        title: "Đã hoàn thành",
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
            </Stack.Navigator>
        </StoreProvider>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
