

import React from 'react';
import {Text, View, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import { useRouter} from 'expo-router';

const { width, height} = Dimensions.get('window');

    const Language = () =>{ 
         const router = useRouter();
          const handleLanguageSelect = () => {
          router.push('/login');
        };

   return(

  <View style={styles.container}>

      <Text style={styles.language}> Select language</Text>

     <TouchableOpacity onPress={handleLanguageSelect}>

      <Text style = { [styles.button]}> English</Text>

     </TouchableOpacity>

     <TouchableOpacity onPress={handleLanguageSelect}>

      <Text style ={ [styles.button]}> Hindi</Text>

     </TouchableOpacity>

  </View>
  
);
};


  const styles =StyleSheet.create({
    container:{
      flex:1,
      paddingVertical:168,
      backgroundColor:'#E8E8E8',

    },

    language:{
      color:'black',
      fontSize:32,
      fontWeight:"bold",
      marginVertical:16,
      paddingVertical:24,
      paddingHorizontal:32,

    },

    button:{
      fontSize: width *0.065,
      fontWeight:"bold",
      width: width *0.8,
      height: height *0.1,
      backgroundColor:'#5AC8FA',
      color: 'black',
      textAlign:'center',
      paddingTop: height * 0.026,
      borderRadius:10,
      marginVertical: height * 0.03,
      marginHorizontal: width * 0.1,
      elevation:14,
      
    }
  });

 export default Language;