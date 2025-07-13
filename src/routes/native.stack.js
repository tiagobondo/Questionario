import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Home from '../pages/Home';

const NativeStack = () => {

  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      initialRouteName="Home"
    >
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}

export default NativeStack;