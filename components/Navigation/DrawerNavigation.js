import { createDrawerNavigator } from "@react-navigation/drawer";
import { Cart } from "../Cart";
import RootNavigator from "./RootNavigator";
import { ProductsList } from "../ProductsList";

const { Navigator, Screen } = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="RootNavigator" component={RootNavigator} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}
