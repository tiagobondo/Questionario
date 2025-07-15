import { StyleSheet } from 'react-native';
import { defaultStyles } from '../../../defaultStyles/defaultSyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyles.colors.cor11,
    paddingHorizontal: '5%',
    paddingVertical: '15%'
  },

  modal: {
    flex: 1,
    backgroundColor: '#0005',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%'
  },

  contentModal: {
    width: defaultStyles.width[7],
    backgroundColor: defaultStyles.colors.cor03,
    height: defaultStyles.height[16],
    padding: 25
  },

  msgModal: {
    fontSize: defaultStyles.fontSize[3],
    fontWeight: 'bold',
    color: defaultStyles.colors.cor06
  },

  btnOk: {
    marginTop: '20%',
    backgroundColor: defaultStyles.colors.cor06,
    height: defaultStyles.height[3],
    justifyContent: 'center',
    alignItems: 'center',
    width: defaultStyles.width[0],
    borderRadius: 5
  },

  txtBtnOk: {
    color: defaultStyles.colors.cor03,
    fontSize: defaultStyles.fontSize[3]
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

  questao: {
    fontSize: defaultStyles.fontSize[3],
    paddingTop: '2%',
    color: defaultStyles.colors.cor03,
    marginBottom: '5%'
  },

  containerOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%'
  },

  numeration: {
    fontSize: defaultStyles.fontSize[3],
    color: defaultStyles.colors.cor03,
    fontWeight: 'bold',
    paddingRight: '2%'
  },

  btnOptions: {
    height: defaultStyles.height[4],
    width: defaultStyles.width[6],
    borderRadius: 10,
    backgroundColor: defaultStyles.colors.cor02,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },

  txtBtnOption: {
    fontSize: defaultStyles.fontSize[2],
    color: defaultStyles.colors.cor03
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
  },
  //
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.cor11
  },

  //
  containerEnd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.cor11,
    paddingHorizontal: '5%',
    paddingVertical: '5%'
  },

  titleCongratulations: {
    fontSize: defaultStyles.fontSize[4],
    color: defaultStyles.colors.cor03,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '5%'
  },

  subtitle: {
    fontSize: defaultStyles.fontSize[3],
    color: defaultStyles.colors.cor03,
  },

  buttonPlayAgain: {
    alignSelf: 'center',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultStyles.colors.cor02,
    height: defaultStyles.height[4],
    width: defaultStyles.width[6],
    borderRadius: 50
  },

  textPlayAgain: {
    fontSize: defaultStyles.fontSize[3],
    fontWeight: 'bold',
    color: defaultStyles.colors.cor03
  }

})