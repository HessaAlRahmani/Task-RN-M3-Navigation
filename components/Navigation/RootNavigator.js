import { createStackNavigator } from "@react-navigation/stack";
import { CartIcon } from "../CartIcon";
import { Product } from "../Product";
import { ProductDetails } from "../ProductDetail";
import { ProductsList } from "../ProductsList";
import { Cart } from "../Cart";

const { Navigator, Screen } = createStackNavigator();

export default function RootNavigator() {
  return (
    <Navigator
      initialRouteName="Products"
      screenOptions={{
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="Products"
        component={ProductsList}
        options={{ headerRight: () => <CartIcon /> }}
      />
      <Screen
        name="Detail"
        component={ProductDetails}
        // options={({ route }) => ({ title: route.params.name })}
      />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}
