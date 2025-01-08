import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Animated } from 'react-native';
import SearchIcon from "@constants/Icons/SearchIcon";

const SearchInput = () => {
  const [iconVisible, setIconVisible] = useState(true);
  const fadeAnim = new Animated.Value(1);

  const handleIconPress = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIconVisible(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Search..."
        />
        {iconVisible && (
          <TouchableOpacity onPress={handleIconPress}>
            <Animated.View style={{ opacity: fadeAnim }}>
              <SearchIcon width={24} height={24} />
            </Animated.View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    width: '80%',
  },
  input: {
    height: 40,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SearchInput;