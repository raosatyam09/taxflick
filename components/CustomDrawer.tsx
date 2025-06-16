import { View,Text,StyleSheet,Dimensions,TouchableWithoutFeedback,TouchableOpacity,Animated,} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function CustomDrawer({ visible, onClose,} : { visible:boolean; onClose:() => void;}) {
  const router = useRouter();
  
  if (!visible) return null;

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback>
          <View style={styles.drawer}>
            <Text style={styles.title}>👋 Hello, User</Text>

            <TouchableOpacity onPress={() => router.push('/(menu)/profile')}>
              <Text style={styles.item}>👤 Profile</Text>
            </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/(menu)/profile')}>
              <Text style={styles.item}> 📜 History</Text>
          </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/(menu)/setting')}>
              <Text style={styles.item}>⚙️ Setting</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              // call logout logic
              console.log('Logging out...');
              onClose(); // also close drawer
            }}>
              <Text style={styles.item}>🚪 Logout</Text>
            </TouchableOpacity>

          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000066', // semi-transparent dark
    zIndex: 999,
    flexDirection: 'row',
  },
  drawer: {
    width: width * 0.7, // half screen
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  item: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});
