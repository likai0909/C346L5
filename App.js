import React from 'react';
import { View, SectionList, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const datasource = [
  {
    data: [
      { key: 'a' },
      { key: 'e' },
      { key: 'i' },
      { key: 'o' },
      { key: 'u' },
    ],
    title: "Vowels",
  },
  {
    data: [
      { key: 'b' },
      { key: 'c' },
      { key: 'd' },
      { key: 'f' },
      { key: 'g' },
      { key: 'h' },
      { key: 'j' },
      { key: 'k' },
      { key: 'l' },
      { key: 'm' },
      { key: 'n' },
      { key: 'p' },
      { key: 'q' },
      { key: 'r' },
      { key: 's' },
      { key: 't' },
      { key: 'v' },
      { key: 'w' },
      { key: 'x' },
      { key: 'y' },
      { key: 'z' },
    ],
    title: "Consonants",
  },
];

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
  },
  opacityStyle: {
    borderWidth: 1,
    borderColor: '#000000',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'left',
    paddingHorizontal: 10,
  },
  headerTextVowels: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#ADD8E6',
  },
  headerTextConsonants: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#FFFACD',
  },
});

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={title === 'Vowels' ? styles.headerTextVowels : styles.headerTextConsonants}>
                  {title}
                </Text>
            )}
        />
      </View>
  );
};

export default App;
