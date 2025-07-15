import React, {
  useEffect,
  useState
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
  ActivityIndicator,
  Modal
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { defaultStyles } from '../../../defaultStyles/defaultSyles';

const Room = () => {
  const [questoes, setQuestoes] = useState([
    {
      id: 1,
      questao: 'Qual dessas é uma linguagem de programação?',
      opcoes: ['HTML', 'CSS', 'Python', 'Photoshop'],
      respostaCerta: 'Python'
    },

    {
      id: 2,
      questao: 'Em programação, o que significa a sigla "API"?',
      opcoes: ['Application Programming Interface', 'Advanced Programming Input', 'Application Primary Index', 'Auto Program Integration'],
      respostaCerta: 'Application Programming Interface'
    },

    {
      id: 3,
      questao: 'Qual operador é usado para atribuição em Python?',
      opcoes: ['==', ':=', '=', '!='],
      respostaCerta: '='
    },

    {
      id: 4,
      questao: 'O que significa o termo "bug" em programação?',
      opcoes: ['Um comando válido', 'Um erro no código', 'Um tipo de variável', 'Um método de depuração'],
      respostaCerta: 'Um erro no código'
    },

    {
      id: 5,
      questao: 'Qual destas linguagens é mais usada para desenvolvimento Web no lado cliente?',
      opcoes: ['PHP', 'JavaScript', 'C++', 'Python'],
      respostaCerta: 'JavaScript'
    },

    {
      id: 6,
      questao: 'Qual estrutura de repetição executa pelo menos uma vez antes de verificar a condição?',
      opcoes: ['while', 'for', 'do-while', 'repeat'],
      respostaCerta: 'do-while'
    },

    {
      id: 7,
      questao: 'Em Python, qual função exibe algo no terminal?',
      opcoes: ['echo', 'log', 'print', 'printf'],
      respostaCerta: 'print'
    },

    {
      id: 8,
      questao: 'Qual destes é um tipo de dado primitivo?',
      opcoes: ['integer', 'array', 'struct', 'class'],
      respostaCerta: 'integer'
    },

    {
      id: 9,
      questao: 'O que é um algoritmo?',
      opcoes: ['Um computador', 'Um erro de sintaxe', 'Uma sequência de passos para resolver um problema', 'Uma linguagem de programação'],
      respostaCerta: 'Uma sequência de passos para resolver um problema'
    },

    {
      id: 10,
      questao: 'Qual operador verifica igualdade em JavaScript?',
      opcoes: ['==', '=', ':=', '+='],
      respostaCerta: '=='
    },

    {
      id: 11,
      questao: 'Como se inicia um comentário de linha única em Python?',
      opcoes: ['//', '/* */', '<!---->', '#'],
      respostaCerta: '#'
    },

    {
      id: 12,
      questao: 'Qual comando limpa a tela no terminal em C?',
      opcoes: ['clean()', 'clearAll()', 'clrscr()', 'wipe()'],
      respostaCerta: 'clrscr()'
    },

    {
      id: 13,
      questao: 'Qual o resultado de 5 % 2 em Python?',
      opcoes: ['2', '1', '0', '5'],
      respostaCerta: '1'
    },

    {
      id: 14,
      questao: 'Qual estrutura é usada para escolher entre várias opções?',
      opcoes: ['switch', 'loop', 'array', 'input'],
      respostaCerta: 'switch'
    },

    {
      id: 15,
      questao: 'O que significa IDE em programação?',
      opcoes: ['Integrated Development Environment', 'Internal Data Execution', 'Integrated Data Editor', 'Internet Development Editor'],
      respostaCerta: 'Integrated Development Environment'
    },

    {
      id: 16,
      questao: 'Qual função retorna o maior valor entre dois números em C?',
      opcoes: ['greater()', 'high()', 'bigger()', 'max()'],
      respostaCerta: 'max()'
    },

    {
      id: 17,
      questao: 'Em JavaScript, qual função exibe um alerta na tela?',
      opcoes: ['message()', 'prompt()', 'alert()', 'show()'],
      respostaCerta: 'alert()'
    },

    {
      id: 18,
      questao: 'Qual operador lógico significa "E" (and) em C?',
      opcoes: ['&&', '&', '||', '|'],
      respostaCerta: '&&'
    },

    {
      id: 19,
      questao: 'Como se chama uma variável definida dentro de uma função?',
      opcoes: ['Static', 'Global', 'Final', 'Local'],
      respostaCerta: 'Local'
    },

    {
      id: 20,
      questao: 'Qual linguagem é frequentemente usada para inteligência artificial?',
      opcoes: ['Python', 'C++', 'HTML', 'PHP'],
      respostaCerta: 'Python'
    },

    {
      id: 21,
      questao: 'Em qual linguagem a função System.out.println() pertence?',
      opcoes: ['C', 'JavaScript', 'Python', 'Java'],
      respostaCerta: 'Java'
    },

    {
      id: 22,
      questao: 'Qual destes não é um tipo de loop?',
      opcoes: ['for', 'loopwhen', 'while', 'foreach '],
      respostaCerta: 'loopwhen'
    },

    {
      id: 23,
      questao: 'Qual estrutura armazena dados em pares chave-valor?',
      opcoes: ['List', 'Set', 'Dictionary', 'Array'],
      respostaCerta: 'Dictionary'
    },

    {
      id: 24,
      questao: 'Qual é a saída de True and False em Python?',
      opcoes: ['True', 'False', 'None', 'Error'],
      respostaCerta: 'False'
    },

    {
      id: 25,
      questao: 'Como se chama o processo de encontrar e corrigir erros no código?',
      opcoes: ['Debugar', 'Compilar', 'Executar', 'Interpretar'],
      respostaCerta: 'Debugar'
    },

    {
      id: 26,
      questao: 'Qual é o símbolo de incremento em C?',
      opcoes: ['++', '--', '+=', ':='],
      respostaCerta: '++'
    },

    {
      id: 27,
      questao: 'Qual função converte string para número inteiro em Python?',
      opcoes: ['toInt()', 'parse()', 'str()', 'int()'],
      respostaCerta: 'int()'
    },

    {
      id: 28,
      questao: 'Qual tipo de dado armazena verdadeiro ou falso?',
      opcoes: ['Boolean', 'String', 'Integer', 'Float'],
      respostaCerta: 'Boolean'
    },

    {
      id: 29,
      questao: 'Como se chama o conjunto ordenado de elementos do mesmo tipo?',
      opcoes: ['Lista', 'Variável', 'Função', 'Array'],
      respostaCerta: 'Array'
    },

    {
      id: 30,
      questao: 'Qual palavra-chave define uma função em Python?',
      opcoes: ['def', 'function', 'func', 'declare'],
      respostaCerta: 'def'
    },

    {
      id: 31,
      questao: 'Qual destes métodos remove o último elemento de uma lista em Python?',
      opcoes: ['remove()', 'pop()', 'delete()', 'clear()'],
      respostaCerta: 'pop()'
    },

    {
      id: 32,
      questao: 'Qual extensão comum de arquivos JavaScript?',
      opcoes: ['.js', '.py', '.c', '.java'],
      respostaCerta: '.js'
    },

    {
      id: 33,
      questao: 'O que faz o operador != em C?',
      opcoes: ['Soma', 'Igual', 'Diferente', 'E'],
      respostaCerta: 'Diferente'
    },

    {
      id: 34,
      questao: 'Qual destas é uma linguagem compilada?',
      opcoes: ['Python', 'HTML', 'JavaScript', 'Java'],
      respostaCerta: 'Java'
    },

    {
      id: 35,
      questao: 'Como se chama o agrupamento de funções e dados em um único componente?',
      opcoes: ['Condicional', 'Classe', 'Método', 'Array'],
      respostaCerta: 'Classe'
    },

    {
      id: 36,
      questao: 'Qual a saída de (3 + 2) * 2 em Linguagens de Programação?',
      opcoes: ['10', '9', '7', '11'],
      respostaCerta: '10'
    },

    {
      id: 37,
      questao: 'Qual operador é usado para OU lógico em JavaScript?',
      opcoes: ['&&', '||', '!', '&'],
      respostaCerta: '||'
    },

    {
      id: 38,
      questao: 'Qual dessas linguagens é mais usada para banco de dados?',
      opcoes: ['SQL', 'C++', 'Java', 'Ruby'],
      respostaCerta: 'SQL'
    },

    {
      id: 39,
      questao: 'Qual linguagem é padrão para desenvolvimento Android nativo?',
      opcoes: ['C', 'C++', 'PHP', 'Java'],
      respostaCerta: 'Java'
    },

    {
      id: 40,
      questao: 'Em programação, o que é loop infinito?',
      opcoes: ['Um loop que termina após 10 iterações', 'Um loop de 2 repetições', 'Um erro de sintaxe', 'Um loop que nunca termina'],
      respostaCerta: 'Um loop que nunca termina'
    },

  ]);

  const [pontos, setPontos] = useState(0);
  const [questaoUsada, setQuestaoUsada] = useState([]);
  const [questaoAtual, setQuestaoAtual] = useState(null);
  const [tempo, setTempo] = useState(15);
  const [vis, setVis] = useState(false);
  const [msg, setMsg] = useState("");

  const { reset } = useNavigation();
  //
  useEffect(() => {
    setProximaQuestao();
  }, []);
  //
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

  const avancar = () => {
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
      //navigate('Home');
      setPontos(0);
    }
  }

  if (pontos == 18) {//18
    return <View style={styles.containerEnd}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Text style={styles.titleCongratulations}>Primeira Fase Terminada!</Text>
      <Text style={styles.subtitle}>Pontos: {pontos} pontos.</Text>

      <TouchableOpacity style={styles.buttonPlayAgain}
        onPress={() => reset({ index: 1, routes: [{ name: 'Level2', pontos: pontos }] })}
      >
        <Text style={styles.textPlayAgain}>Seguir</Text>
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
              onPress={() => avancar()}
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
            <Text style={styles.score}>Pontos: {pontos}</Text>
            <Text style={styles.questao}>{questaoAtual.questao}</Text>
          </View>

          {
            questaoAtual.opcoes.map((option, index) => (
              <View key={index} style={styles.containerOptions}>
                <Text style={styles.numeration}>{index + 1}</Text>
                <TouchableOpacity onPress={() => verificandoResposta(option)} style={styles.btnOptions} activeOpacity={0.5}>
                  <Text style={styles.txtBtnOption}>{option}</Text>
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

export default Room;