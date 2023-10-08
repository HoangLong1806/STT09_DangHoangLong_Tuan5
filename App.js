import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image,button, YellowBox } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style ={styles.Login}>Login</View>
        <View style={styles.Name}>
            <Image source ={require('./assets/avatar_user.png')} style= {{width: 34, height: 34, marginLeft: 5}}></Image>
            <TextInput placeholder='Name' style = {{with:'300px', height:'35px', marginTop:'10px', marginLeft: 50}}></TextInput>
        </View>
        <View style={styles.Password}>
        <Image source ={require('./assets/Vector.png')} style= {{width: 34, height: 34, marginLeft: 5}}></Image>
            <TextInput style = {{width: 100, height: 70, marginRight:70 }}  placeholder='PassWord' ></TextInput>
        <Image source ={require('./assets/eye.png')} style= {{width: 34, height: 34, marginRight: '10px'}}></Image>
        </View>
        <view style={styles.ButtonLogin}>
          <button style={{width: '330px', height: '45px', borderWidth: '1px', borderRadius:"5px", backgroundColor: 'pink'}}>Login</button>
        </view>
        <view>
          <TextInput></TextInput>
        </view>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    
    backgroundImage: 'linear-gradient(to bottom, #ff0000, #0000ff)',
    
  },
  Login: {
    width: '100%', 
    height: '35px', 
    marginTop: '75px', 
    justifyContent: 'center',
    alignItems: 'center' ,
    fontSize: '50px',
  },
  Name: {
     width: '340px',
     height: '54px',
     marginTop: '192px',
     marginLeft: '15px',
     borderWidth: '1px',
     borderRadius: '5px',
     alignItems: 'center',
     flexDirection: 'row'
  },
  Password: {
    width: '340px',
    height: '54px',
    marginTop: '20px',
    marginLeft: '15px',
    borderWidth: '1px',
    borderRadius: '5px',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
 },
 ButtonLogin:{
   alignItems: 'center',
   justifyContent: 'center',
   marginLeft: '19px',
   marginTop: '40px',
 }

  

});