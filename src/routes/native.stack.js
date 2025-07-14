import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Home from '../pages/Home';
import Room from "../pages/Room";

const NativeStack = () => {

  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="Room"
        component={Room}
      />
    </Navigator>
  )
}

export default NativeStack;