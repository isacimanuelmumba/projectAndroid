import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View , 
  Dimensions, 
  Image,
  Button,
  TouchableOpacity,
  Switch,
  Picker,
  FlatList,
} from 'react-native';

export default class App extends React.Component {
  cetakHalo(param){
    alert('HALOO');
    console.log('HALOO 123');
  }
  
  addPicker(){
    for (i = 0; i < 3; i++) 
    { 
      return(
        <Picker.Item label='agung'/>
      )
    }
  }

  render(){

    const gambar = <Image
                    style={{
                      width: 200, 
                      height: 200
                    }}
                    source={
                      require('./assets/logostts.jpg')}
                  ></Image>;

    return (
      <View style={styles.container}>
        {/*<Text style={{
            fontSize: 30, 
            color: 'red'
          }} >
          haloooo
          <Text style={{color: 'blue'}}>agung</Text>
        </Text>
        <TouchableOpacity onPress={(param)=>this.cetakHalo(param)}>
          {gambar}
        </TouchableOpacity>
        
        <Button
          title='login'
          color='red'
          onPress={(param)=>this.cetakHalo(param)}
        ></Button>

        <Switch></Switch>

        <Picker style={{width: 100, height: 50}}>
          
          <Picker.Item label='agung'/>
          <Picker.Item label='dewa'/>
          <Picker.Item label='bagus'/>
        </Picker>
      

        <Image
          style={{
            width: 200, 
            height: 200
          }}
          source={
            require('./assets/logostts.jpg')}
        ></Image>*/}
        {/*<View style={[styles.colorView, {backgroundColor: 'red', flexDirection:'row'}]}>
          <View style={{flex: 1, backgroundColor:'green'}}>

          </View>
          <View style={{flex: 1, backgroundColor:'yellow'}}>
            
          </View>
        </View>
        <View style={[styles.colorView, {backgroundColor: 'blue'}]}>
          
        </View>*/}

        <Text style={{fontSize: 20}}>
          Agung Dewa Bagus Soetiono
        </Text>
        <Text style={[styles.textStyle, {fontSize: 30}]}>
          asdasdasdas
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorView: {
    flex: 1, 
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height,
  },
  textStyle: {
    flex: 1,
  }
});
