import {Text, TextInput,View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import { STATES_AND_UTS } from '@/app/data/statelist';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState} from 'react';
import {useRouter} from 'expo-router';
import  * as ImagePicker from 'expo-image-picker';
import {getFirestore, doc, setDoc }from 'firebase/firestore';
import { getAuth }from 'firebase/auth';
import {makeRedirectUri} from 'expo-auth-session';
import { auth,firebaseApp } from '@/firebase/firebaseConfig';
// import { firebaseAuth} from '@/firebase/firebaseConfig';

const CompanyDetails =  () => {

    const router = useRouter();
    const [logo, setLogo] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(STATES_AND_UTS);
    
     const [companyName, setCompanyName] = useState('');
     const [contactNumber, setContactNumber] = useState('');
     const [ email, setEmail] = useState('');
     const [address, setAddress] = useState('');
     const [gstNumber, setGstNumber] = useState('');
    //  const [Images, setImage] = useState('');
     const [state, setState] = useState('');
    


// handling save button to store the data-

  const HandleSave= async () =>{
       const auth =getAuth (firebaseApp);
      const db =getFirestore(firebaseApp);
      const user = auth.currentUser;

      if(!user) {
        alert('User not logged in');
        return;
      }
      try{
        const docRef = doc (db, 'companies', user.uid);
        await setDoc(docRef,{
          companyName,
          contactNumber,
          email,
          address,
          gstNumber,
          state:value,
          logo: logo || null,
          createdAt: new Date().toISOString(),
        });

        alert('Company details saved!');
        router.push('/home');

      } catch(error){
        console.error('Error saving company Details', error);
        alert('Failed ot save data.');
      }
}

// handling save button to store the data-
    
  //   const handleSave =async () =>{
  //     const auth =getAuth (firebaseApp);
  //     const db =getFirestore(firebaseApp);
  //     const user = auth.currentUser;

  //     if(!user) {
  //       alert('User not logged in');
  //       return;
  //     }
  //     try{
  //       const docRef = doc (db, 'companies', user.uid);
  //       await setDoc(docRef,{
  //         companyName,
  //         contactNumber,
  //         email,
  //         address,
  //         gstNumber,
  //         state:value,
  //         logo: logo || null,
  //         createdAt: new Date().toISOString()
  //       });

  //       alert('Company details saved!');

  //     } catch(error){
  //       console.error('Error saving company Details', error);
  //       alert('Failed ot save data.');
  //     }
  // };
  
  
  const handleSelectLogo = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!pickerResult.canceled) {
      setLogo(pickerResult.assets[0].uri);
    }
  };

  return(

        <View style={styles.main}>

<Text style={styles.heading}>Company Details</Text>

<TextInput style={styles.value} placeholder='Company Name' value={companyName} /> 

<TextInput style={styles.value} keyboardType="phone-pad" placeholder="Contact Number" value={contactNumber} /> 

<TextInput style={styles.value} keyboardType="email-address" autoCapitalize="none" autoCorrect={false}  placeholder="Email" value={email}/> 

<TextInput style={styles.value} placeholder="Address" value={address}/> 

<TextInput style={styles.value} placeholder="GST Number" value={gstNumber}/> 

{ logo && (
     <Image source={{ uri : logo }} style={{ width :60 , height:80, borderRadius:6}}  />
)}

<TouchableOpacity onPress={handleSelectLogo}  style ={{ marginHorizontal:24, marginVertical:6, backgroundColor:'#E1E1E1',  borderWidth:2, borderColor:"black", padding:10, width:"87%", borderRadius:6}}>
      
    <Text style={{ color: '#999'}} >
           {logo ? 'Change Logo ' : 'Select company logo'}
    </Text>

</TouchableOpacity>

   <DropDownPicker 
        open={open}
        value={state}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="-- Select State --"
        style={styles.drop}/>      
     
 <TouchableOpacity style={styles.submit} onPress={HandleSave} >   
  <Text style={styles.submitText}>Save</Text> 
  </TouchableOpacity>

</View>

);
};

const styles = StyleSheet.create({
    value:{
        borderWidth:2,
        marginVertical:10,
        marginHorizontal:24,
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:8,
    },
    drop:{
         borderWidth:2,
        marginVertical:10,
        width:"87%",
         borderBottomColor: '#eee',
        borderBottomWidth: 1,
        alignSelf:"center",
        alignItems:"center",
        borderRadius:6,
        marginHorizontal:24,
        paddingHorizontal:12,
        paddingVertical:8,
        backgroundColor:"#E1E1E1",
    },

    heading:{
        fontSize:22,
        marginVertical:38,
        paddingHorizontal:40,
        backgroundColor:"#D4D4D4",
        paddingVertical:12,
        fontWeight:'bold',
        
    },
    submit:{
        width:"80%",
        backgroundColor:'#5AC8FA',
        borderRadius:48,
        marginHorizontal:32,
        marginVertical:15,

    },
    submitText:{
        marginVertical:15,
        backgroundColor:'#5AC8FA',
        borderRadius:48,
        textAlign:"center",
        fontSize:25,
    },

    main:{
        flex:1,
        backgroundColor:'#E8E8E8',  
    }, 

});

export default CompanyDetails;