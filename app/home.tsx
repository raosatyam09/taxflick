import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useState } from 'react';
import CustomDrawer  from '@/components/CustomDrawer';
import { LinearGradient} from 'expo-linear-gradient';

const Home= ()=>{

const [isDrawerVisible, setDrawerVisible] = useState(false);
const openDrawer = () => setDrawerVisible(true);
const closeDrawer = () => setDrawerVisible(false);
const [activeIcon, setActiveIcon] = useState('home');
 
return(
  
<View style={styles.main_container}>
   
  <LinearGradient colors ={['#AEE1F9', '#5AC8FA']} start={{ x:0 , y:0}} end={{ x:0, y:1}} style={styles.headerGradient}> 

  <TouchableOpacity onPress={openDrawer}>
   <Ionicons name="menu" size={38} />
  </TouchableOpacity>

   <TouchableOpacity>

    <Ionicons name="calendar-outline" size ={36}/>
   </TouchableOpacity>

    </LinearGradient>  

    <View style={styles.main_body}> 
    <Text>This is main page </Text>
    </View> 

  <LinearGradient colors ={['#AEE1F9', '#5AC8FA']} start={{ x:0 , y:0}} end={{ x:0, y:1}} style={styles.footerGradient}>  

<TouchableOpacity onPress={() => setActiveIcon('home')}>
    <Ionicons 
    name ={activeIcon === 'home' ? 'home' : 'home-outline'} 
    size={45} 
    color={activeIcon === 'home' ? '#007AFF' : '#333'}/>
</TouchableOpacity>


<TouchableOpacity onPress={() => setActiveIcon('add')}>
    <Ionicons
     name ={activeIcon === 'add' ? 'add-circle' : 'add-circle-outline' }
     size={52}
      color={ activeIcon === 'add' ? '#007AFF' : '#333'} />
</TouchableOpacity>

<TouchableOpacity onPress={ () => setActiveIcon('person')}>
    <Ionicons 
    name={activeIcon === 'person' ? 'person' :'person-outline'}
    size={45} 
    color={ activeIcon === 'person' ? '#007AFF' : '#333'} />
  </TouchableOpacity>
  </LinearGradient> 

{/* CustomDrawer with visibility logic */}

   <CustomDrawer visible={isDrawerVisible} onClose={closeDrawer} /> 
</View>

)};

const styles=StyleSheet.create({

  main_container:{
    flex:1,
    marginVertical:40,
  },

  header:{
    
  },

  headerGradient: {
  paddingHorizontal: 12,
  paddingBottom: 16,
  elevation: 20, // Android shadow
  shadowColor: '#000', // iOS shadow
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
  flexDirection:"row",
   paddingVertical:18,
  justifyContent:"space-between",
},

  main_body:{
      
    flex:1,
    backgroundColor:"#E8E8E8",
    color:"black",
    fontSize:25,
  },

  footerGradient:{
  paddingHorizontal: 16,
  paddingBottom: 10,
  elevation: 20, // Android shadow
  shadowColor: '#000', // iOS shadow
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
  flexDirection:"row",
  paddingVertical:14,
  justifyContent:"space-between",
  }
});

export default Home;
