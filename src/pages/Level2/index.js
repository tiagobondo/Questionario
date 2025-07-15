import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  StatusBar,
  Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { defaultStyles } from '../../../defaultStyles/defaultSyles';

const imagens = {
  img1: require('../../../assets/img/img1.jpeg'),
  img2: require('../../../assets/img/img2.jpeg'),
  img3: require('../../../assets/img/img3.jpeg'),
  img4: require('../../../assets/img/img4.jpeg'),
  img5: require('../../../assets/img/img5.jpeg'),
  img6: require('../../../assets/img/img6.jpeg'),
  img7: require('../../../assets/img/img7.jpeg'),
  img8: require('../../../assets/img/img8.jpeg'),
  img9: require('../../../assets/img/img9.jpeg'),
  img10: require('../../../assets/img/img10.jpeg'),
  img11: require('../../../assets/img/img11.jpeg'),
}


const Level2 = (props) => {
  //props.route.pontos

  const [questoes, setQuestoes] = useState([
    {
      id: 1,
      questao: 'Em que figura aparece o Guido van Rossum?',
      opcoes: ['img1', 'img2'],
      respostaCerta: 'img1'
    },

    {
      id: 2,
      questao: 'Qual das duas imagens apresenta o fundador do Facebook?',
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
      questao: 'Mike Krieger foi um dos desenvolvedores do Instagram. Identifique',
      opcoes: ['img11', 'img10'],
      respostaCerta: 'img11'
    },


  ]);

  const [pontos, setPontos] = useState(props.route.pontos);
  const [questaoUsada, setQuestaoUsada] = useState([]);
  const [questaoAtual, setQuestaoAtual] = useState(null);
  const [tempo, setTempo] = useState(15);
  const [vis, setVis] = useState(false);
  const [msg, setMsg] = useState("");

  const { navigate, goBack, reset } = useNavigation();

  useEffect(() => {
    setProximaQuestao();
  }, [])

  useEffect(() => {
    if (tempo == 0) {
      setVis(true);
      setMsg("Tempo Esgotado!");
      setTimeout(() => {
        reset({
          index: 0,
          routes: [{ name: 'Home' }]
        });
      }, 800)
    }
    const temporizador = setTimeout(() => {
      setTempo(tempo - 1);
    }, 1000);

    return () => clearTimeout(temporizador);
  }, [tempo])

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

  const finalizar = () => {
    setVis(false);
    setProximaQuestao();
  }

  const verificandoResposta = (selectedOption) => {
    const resposta = questaoAtual.respostaCerta;

    if (resposta == selectedOption) {
      setVis(true);
      setMsg("Resposta Certa!");
      setPontos(pontos >= pontos + 2);
      setPontos(pontos + 2);
      //setTempo(0);
    } else {
      setVis(true);
      setMsg("Resposta Errada!");
      setTimeout(() => {
        reset({
          index: 0,
          routes: [{ name: 'Home' }]
        });
      }, 500)
      setPontos(0);
    }
  }

  if (pontos == 24) { //24
    return <View style={styles.containerEnd}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Text style={styles.titleCongratulations}>Parabéns, Você é o grande vencedor!</Text>
      <Text style={styles.subtitle}>Pontuação: {pontos} pontos.</Text>

      <TouchableOpacity style={styles.buttonPlayAgain}
        onPress={() => reset({ index: 2, routes: [{ name: 'Home' }] })}>
        <Text style={styles.textPlayAgain}>Finalizado</Text>
      </TouchableOpacity>
    </View>
  }

  //Timer
  if (!questaoAtual) {
    if (pontos == 0) {
      return <View style={styles.containerLoading}><ActivityIndicator color={defaultStyles.colors.cor02} size={'large'} /></View>
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      <Modal
        visible={vis}
        transparent={true}
        animationType='fade'
      >
        <View style={styles.modal}>
          <View style={styles.contentModal}>
            <Text style={styles.msgModal}>{msg}</Text>
            <TouchableOpacity
              onPress={() => finalizar()}
              style={styles.btnOk}
            >
              <Text style={styles.txtBtnOk}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.title}>Sala de Jogo</Text>

      {questaoAtual && (
        <>
          <View style={styles.containerQuestao}>
            <View style={styles.containerTimer}>
                          <FontAwesome5
                            name='clock'
                            size={defaultStyles.fontSize[5]}
                            color={defaultStyles.colors.cor03}
                          />
                          <Text style={styles.time}>{tempo}</Text>
                        </View>
            <Text style={styles.questao}>{questaoAtual.questao}</Text>
          </View>

          {

            questaoAtual.opcoes.map((option, index) => (
              <View key={index} style={styles.containerOptions}>
                <Image
                  source={imagens[option]}
                  style={styles.img}
                />

                <TouchableOpacity onPress={() => verificandoResposta(option)} style={styles.btnOptions} activeOpacity={0.5}>
                  <Text style={styles.txtBtnOption}>{index + 1}</Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </>
      )}

      <TouchableOpacity style={styles.btnExit}
        onPress={() => reset({ index: 2, routes: [{ name: 'Home' }] })}>
        <Text style={styles.txtBtnExit}>Abandonar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Level2;