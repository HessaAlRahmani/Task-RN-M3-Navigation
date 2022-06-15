import { NavigationContainer } from "@react-navigation/native";
import { Cart } from "./components/Cart";
import RootNavigator from "./components/Navigation/RootNavigator";
import DrawerNavigation from "./components/Navigation/DrawerNavigation";
import { Product } from "./components/Product";
import { ProductDetails } from "./components/ProductDetail";
import { ProductsList } from "./components/ProductsList";
import "react-native-gesture-handler";
import Animated from "react-native-reanimated";

export default function App() {
  return (
    <NavigationContainer>
      {/* <RootNavigator /> */}
      <DrawerNavigation />
    </NavigationContainer>
  );
}
