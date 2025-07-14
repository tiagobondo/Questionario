import { StyleSheet } from 'react-native';

import { defaultStyles } from '../../../defaultStyles/defaultSyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: defaultStyles.colors.cor11,
    paddingHorizontal: '5%',
    paddingVertical: '5%'
  },

  title: {
    fontSize: defaultStyles.fontSize[5],
    fontWeight: 'bold',
    color: defaultStyles.colors.cor06
  },

  img: {
    width: defaultStyles.width[5],
    height: defaultStyles.height[10],
    marginBottom: '20%',
    alignSelf: 'center'
  },

  btnGo: {
    alignSelf: 'center',
    width: defaultStyles.width[7],
    height: defaultStyles.height[4],
    backgroundColor: defaultStyles.colors.cor02,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  txtBtnGo: {
    fontSize: defaultStyles.fontSize[3],
    fontWeight: 'bold',
    color: defaultStyles.colors.cor03
  },

  txtVersion: {
    fontSize: defaultStyles.fontSize[0],
    marginTop: '5%',
    textAlign: 'center',
    color: defaultStyles.colors.cor03
  }
})