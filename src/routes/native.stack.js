import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Home from '../pages/Home';
import Room from "../pages/Room";
import Level2 from "../pages/Level2";

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

      <Screen
        name="Level2"
        component={Level2}
      />
    </Navigator>
  )
}

export default NativeStack;