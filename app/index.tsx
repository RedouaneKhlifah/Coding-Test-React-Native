import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  Notification  from '@constants/Icons/Notification';
import {SIZES , FONTS} from '@constants/themes';
import SearchInput from '@components/tasks/SearchInput';


export default function Index() {
  return (
    <LinearGradient
    colors={['rgba(84,143,196,1)', 'rgba(232,236,249,1)']}
    locations={[0.11, 1]} // Corresponding to 0%, 11%, 100%
    start={{ x: 0, y: 0 }}    // Start point (top-left corner)
    end={{ x: 1, y: 0.3 }}    // End point (adjusted for 95 degrees, slightly diagonal)
    style={{ flex: 1 , alignItems : 'center'}}
    >
        
        <View style={styles.headerContainer}>
            <View></View>
            <Text>Task</Text>
            <Notification width={20} height={20} />
        </View>

        <View style={styles.BodyContainer}>
            <Text style= {styles.BodyHeader}>Task List</Text>
            <SearchInput/>
        </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor : "red",
    width: '100%'
  },

  BodyContainer : {
    flex: 5,
    backgroundColor: 'blue',
    width: '90%',
  },
  BodyHeader : {
    fontSize : SIZES.textPre2xl,
  }

});