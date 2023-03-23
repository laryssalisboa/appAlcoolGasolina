import React, { Component } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { TextInput } from 'react-native-web';
import { styles } from './styles';
 
class App extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
      alcool: 0.00,
      gasolina: 0.00,
      result: ''
    };

    this.inputAlcool = this.inputAlcool.bind(this);
    this.inputGasolina = this.inputGasolina.bind(this);

  }

  inputAlcool(alcool){
    this.setState({alcool: alcool});
  }

  inputGasolina(gasolina){
    this.setState({gasolina: gasolina});
  }

  calculation() {
    let price = this.state.alcool / this.state.gasolina;
    price < 0.7 ? this.setState({result: "Álcool é a melhor opção"}) : this.setState({result: "Gasolina é a melhor opção"});
  }

  render(){

    let img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Circle-icons-gas.svg/512px-Circle-icons-gas.svg.png';

    return(
      <View>
        <Text style={styles.title}>Álcool ou Gasolina?</Text>

        <Image 
        source={{uri: img}} 
        style={styles.img}
        />

        <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        onChangeText={(a) => this.setState({alcool: a})}
        />

        <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        onChangeText={(g) => this.setState({gasolina: g})}
        />

        <Pressable style={styles.button} onPress={ () => this.calculation() }>
          <Text style={styles.textButton}>Verificar</Text>
        </Pressable>

        <Text style={styles.textResult}>{this.state.result}</Text>

      </View>
    )
  }
}
 
export default App;