import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../defaultStyles/defaultSyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.cor11,
    paddingHorizontal: '5%',
    paddingVertical: '15%',
  },

  containerOptions: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  img: {
    width: defaultStyles.width[2],
    height: defaultStyles.height[19],
    borderRadius: 5
  },

  btnOptions: {
    backgroundColor: defaultStyles.colors.cor02,
    width: defaultStyles.width[1],
    height: defaultStyles.height[3],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  txtBtnOption: {
    fontSize: defaultStyles.fontSize[3],
    fontWeight: 'bold',
    color: defaultStyles.colors.cor03
  },

  questao: {
    fontSize: defaultStyles.fontSize[3],
    paddingTop: '2%',
    color: defaultStyles.colors.cor03,
    marginBottom: '5%'
  },

  title: {
    fontSize: defaultStyles.fontSize[4],
    color: defaultStyles.colors.cor02,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  score: {
    fontSize: defaultStyles.fontSize[2],
    color: defaultStyles.colors.cor03,
    fontWeight: 'bold'
  },

  btnExit: {
    alignSelf: 'center',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.cor05,
    height: defaultStyles.height[4],
    width: defaultStyles.width[2],
    borderRadius: 50
  },

  txtBtnExit: {
    fontSize: defaultStyles.fontSize[2],
    fontWeight: 'bold',
    color: defaultStyles.colors.cor03
  }

})