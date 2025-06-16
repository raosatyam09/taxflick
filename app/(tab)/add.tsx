
import{ Text, View, StyleSheet, TextInput} from 'react-native';
const AddSection =() =>{
    return(

     <View style={styles.container}>

     <Text style={styles.heading}> Bill To</Text>
            <TextInput style={styles.values} placeholder="Enter Company Name" />
            <TextInput style={styles.values} placeholder="Enter address" />
            <TextInput style={styles.values} placeholder="Enter Mobile Number" />
            <TextInput style={styles.values} placeholder="Enter Email" />
            <TextInput style={styles.values} placeholder="Enter GST Number" />
           
{/* ship to details */}

         <Text style={styles.heading}> Ship To</Text>

            <TextInput style={styles.values} placeholder="Enter company name" />
            <TextInput style={styles.values} placeholder="Enter address" />
            <TextInput style={styles.values} placeholder="Enter Mobile Number" />
            <TextInput style={styles.values} placeholder="Enter Email" />
            <TextInput style={styles.values} placeholder="Enter GST Number"/>
        </View>
    )

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E8E8E8',
    },
    values:{
          borderWidth:2,
          marginVertical:8,
          borderRadius:12,
          paddingHorizontal:4,
    },
    heading:{
        color:"black",
        fontSize:22,
    }
})
export default AddSection;