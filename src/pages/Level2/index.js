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
  img3: require('../../../assets/img/img3.jpg'),
  img4: require('../../../assets/img/img4.jpg'),
  img5: require('../../../assets/img/img5.jpg'),
  img6: require('../../../assets/img/img6.jpg'),
  img7: require('../../../assets/img/img7.jpg'),
  img8: require('../../../assets/img/img8.jpg'),
  img9: require('../../../assets/img/img9.jpg'),
  img10: require('../../../assets/img/img10.jpg'),
  img11: require('../../../assets/img/img11.jpg'),
}


const Level2 = () => {

  const [questoes, setQuestoes] = useState([
    {
      id: 1,
      questao: 'Em que figura aparece o Guido van Rossum?',
      opcoes: ['img1', 'img2'],
      respostaCerta: 'img1'
    },

    {
      id: 2,
      questao: 'Qual das duas imagens apresenta o fundados do Facebook?',
      opcoes: ['img1', 'img3'],
      respostaCerta: 'img3'
    },

    {
      id: 3,
      questao: 'Em que imagem identificamos Brendan Eich fundador da Linguagem JavaScript?',
      opcoes: ['img4', 'img2'],
      respostaCerta: 'img4'
    },

    {
      id: 4,
      questao: 'Qual das imagens apresenta um dos fundadores da Microsoft?',
      opcoes: ['img4', 'img5'],
      respostaCerta: 'img5'
    },

    {
      id: 5,
      questao: 'Identifique Bill Gates entre essas duas imagens',
      opcoes: ['img5', 'img3'],
      respostaCerta: 'img5'
    },

    {
      id: 6,
      questao: 'Dennis Ritchie foi um dos desenvolvedores da Linguagem C. Identifique',
      opcoes: ['img7', 'img6'],
      respostaCerta: 'img6'
    },

    {
      id: 7,
      questao: 'Jan Koum foi um dos desenvolvedores da rede whatsApp. Identifique',
      opcoes: ['img8', 'img6'],
      respostaCerta: 'img8'
    },

    {
      id: 8,
      questao: 'Bjarne Stroustrup foi um dos desenvolvedores da Linguagem C++. Identifique',
      opcoes: ['img8', 'img9'],
      respostaCerta: 'img9'
    },

    {
      id: 9,
      questao: 'Donald D. Chamberlin foi um dos desenvolvedores da Linguagem SQL. Identifique',
      opcoes: ['img10', 'img9'],
      respostaCerta: 'img10'
    },

    {
      id: 10,
      questao: 'Mike Krieger foi um dos desenvolvedores do Instagram SQL. Identifique',
      opcoes: ['img11', 'img10'],
      respostaCerta: 'img11'
    },


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