import {useState,useEffect} from 'react';
import { Text, View, StyleSheet,TouchableOpacity, TextInput, Button, Image,Alert} from 'react-native';
import {useRouter} from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
// import { firebaseAuth} from '@/firebase/firebaseConfig';
import { makeRedirectUri } from 'expo-auth-session';
import { initializeApp } from '@firebase/app';
import { getAuth, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
// import  { firebaseConfig } from '@/firebase/firebaseConfig';
import * as AuthSession from 'expo-auth-session';
import Constants from 'expo-constants';

WebBrowser.maybeCompleteAuthSession();


// const app=initializeApp(firebaseConfig);
// const auth = getAuth(app);


const LoginScreen = () =>{
    const router = useRouter();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [pressedButton, setPressedButton] = useState<string | null> (null);



    // const redirectUri = makeRedirectUri({ useProxy: true});

   const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '966919200661-rqubfis21s486sos24h2oacn81go5o3k.apps.googleusercontent.com',
     redirectUri: 'https://auth.expo.io/@collegezania/taxflick',
   
});



  //  const redirectUri = AuthSession.makeRedirectUri();
    //  console.log("Generated Redirect uri without proxy:", redirectUri);






   useEffect(() => {
    if(response?.type === 'success' && response.authentication){

      const { idToken } = response.authentication;

      if(idToken) {
        const auth =getAuth();
        const credential = GoogleAuthProvider.credential(idToken);

        signInWithCredential(getAuth(), credential)
           .then((userCredential) => {
            console.log("Firebase Sign-In Success:", userCredential.user);
           })
        .catch((err) => {
          console.error("❌ Firebase Sign-In Error:", err);
          Alert.alert("Firebase Sign-In Error", err.message);
        });

      } else {
      Alert.alert("Login failed", "No ID token received from Google.");
    }
    } else if (response?.type === 'error') {
    Alert.alert("Login failed", "Something went wrong with Google Sign-In");
  }
      
}, [response]);

const handleLogin = () => {

  if (!userId.trim()){
    alert("Username is required");
    return;
  }
    if (!password.trim()){
      alert("Password is required");
      return;
 }
   router.push( '/company');

};

   return (
    <View style={Styles.contain}> 
        
        <Text style ={Styles.text}> Login your account</Text>
        <TextInput style={[Styles.label, pressedButton === 'google' && Styles.activeBorder ]} value={userId} onChangeText={setUserId}  placeholder="Enter your username" onFocus={ () => setPressedButton('google')} onBlur={()=> setPressedButton(null)}/>  
        <TextInput style={[Styles.label, pressedButton === 'password' && Styles.activeBorder ]} value ={password}  onChangeText={setPassword} placeholder="Enter your password" onFocus={ () => setPressedButton('password')} onBlur={()=> setPressedButton(null)} secureTextEntry /> 

  <TouchableOpacity >
    <Button title="Login" onPress={handleLogin} />
  </TouchableOpacity>


    <Text style={Styles.account_text}>  create your account 👇 </Text>

  <TouchableOpacity style={Styles.googleButton} onPress={() => promptAsync()} disabled={!request}> 

        <Image source={require('@/assets/images/google.webp')}  style={Styles.googleIcon} resizeMode="contain"/>    
        <Text style = { Styles.googleText}> Continue with google </Text>
                
  </TouchableOpacity>
  </View>
)

};

 const Styles = StyleSheet.create({
    contain:{
      flex:1,
      backgroundColor:'#E8E8E8',
      paddingHorizontal:40,
      paddingVertical:40,
      justifyContent:"center",
    },
    text:{


      fontSize:25,
      marginBottom:15,
      textAlign:"center",
    },
    buttons:{

      fontSize:20,
      color:"black",
      textAlign:"center",

    },
     label:{
     borderWidth:1.5,
     borderRadius:7,
     borderColor:"Black",
     marginBottom:16,
     padding:12,
     backgroundColor:'#f5f5f5'

 },
   googleButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:'#fff',
    paddingVertical:12,
    paddingHorizontal:10,
    borderWidth:2,
    borderRadius:30,
    borderColor:"Black",
    marginBottom:16,
    padding:12,
      
   },
   googleIcon:{
    width:24,
    height:24,
    marginRight:8,
   },
  googleText:{
    fontSize:16,
    fontWeight:"bold",
  },

   facebookButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:'#fff',
    paddingVertical:12,
    paddingHorizontal:10,
    borderWidth:2,
    borderRadius:30,
    borderColor:"Black",
    marginBottom:16,
    padding:12,
   },

   facebookIcon:{
    width:24,
    height:24,
    marginRight:12,
   },

   facebookText:{
    fontSize:16,
    fontWeight:"bold",
   },

   twitter:{
     borderWidth:2,
         borderRadius:30,
         borderColor:"Black",
         marginBottom:16,
         padding:12,
   },
   account_text:{
      fontSize:16,
      padding:8,
      textAlign:"center",
      fontStyle:"italic",
      fontWeight:"bold",
   },

   activeBorder:{
    borderColor:"blue",
    
   },
}
);
 
export default LoginScreen;