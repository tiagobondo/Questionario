import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

const Home = () => {

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      <Text style={styles.title}>Seja Bem-Vindo ao</Text>

      <Image
        style={styles.img}
        source={require('../../../assets/img/img-titulo.png')}
        resizeMode='contain'
      />

      <TouchableOpacity style={styles.btnGo}
        onPress={() => navigate('Room')}
      >
        <Text style={styles.txtBtnGo}>Começar</Text>
      </TouchableOpacity>


    </View>
  )
}

export default Home;