import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { defaultStyles } from '../../../defaultStyles/defaultSyles';

const imagens = {
  img1: require('../../../assets/img/img1.jpg'),
  img2: require('../../../assets/img/img2.jpg'),
}


const Level2 = () => {

  const [questoes, setQuestoes] = useState([
    {
      id: 1,
      questao: 'Qual?',
      opcoes: ['img1', 'img2'],
      respostaCerta: 'img1'
    }
  ]);

  const [pontos, setPontos] = useState(0);
  const [questaoUsada, setQuestaoUsada] = useState([]);
  const [questaoAtual, setQuestaoAtual] = useState(null);

  const { navigate, goBack } = useNavigation();

  useEffect(() => {
    setProximaQuestao();
  }, [])

  //
  var n = 1;

  const setProximaQuestao = () => {
    const questoesRestantes = questoes.filter((q) => !questaoUsada.includes(q.id));

    if (questoesRestantes.length > 0) {
      const randomIndex = Math.floor(Math.random() * questoesRestantes.length);
      const proximaQuestao = questoesRestantes[randomIndex];

      setQuestaoAtual(proximaQuestao);
      setQuestaoUsada([...questaoUsada, proximaQuestao.id]);
    } else {
      setQuestaoAtual(null);
    }
  }

  const verificandoResposta = (selectedOption) => {
    const resposta = questaoAtual.respostaCerta;

    if (resposta == selectedOption) {
      // setVis(true);
      Alert.alert("Resposta Certa!");
      setPontos(pontos >= pontos + 2);
      setPontos(pontos + 2);
      //setTempo(0);
    } else {
      //setVis(true);
      Alert.alert("Resposta Errada!");
      navigate('Home');
      setPontos(0);
    }
  }

  //Timer
  if (!questaoAtual) {
    if (pontos == 0) {
      return <View style={styles.containerLoading}><ActivityIndicator color={defaultStyles.colors.cor02} size={'large'} /></View>
    }
  }

  if (pontos == 2) {
    return <View style={styles.containerEnd}>
      <Text style={styles.titleCongratulations}>Parabéns por terminar a primeira fase com êxito!</Text>
      <Text style={styles.subtitle}>Pontuação: {pontos} pontos.</Text>

      <TouchableOpacity style={styles.buttonPlayAgain}
        onPress={() => navigate('Level2')}>
        <Text style={styles.textPlayAgain}>Seguir</Text>
      </TouchableOpacity>
    </View>
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sala de Jogo</Text>

      <View style={styles.containerQuestao}>
        <Text style={styles.score}>Pontos: {pontos}</Text>
        <Text style={styles.questao}>{questaoAtual.questao}</Text>
      </View>

      {

        questaoAtual.opcoes.map((option, index) => (
          <View style={styles.containerOptions}>
            <Image
              source={imagens[option]}
              style={styles.img}
            />

            <TouchableOpacity key={index} onPress={() => verificandoResposta(option)} style={styles.btnOptions} activeOpacity={0.5}>
              <Text style={styles.txtBtnOption}>{n++}</Text>
            </TouchableOpacity>
          </View>
        ))
      }

      <TouchableOpacity style={styles.btnExit}
        onPress={() => goBack()}
      >
        <Text style={styles.txtBtnExit}>Abandonar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Level2;