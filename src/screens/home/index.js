import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeListItem from './components/HomeListItem';
import UserContext from '../../store/UserContext';
import styles from './styles';

const Home = () => {
  const { cases, getCases } = useContext(UserContext);

  const [searchResult, setSearchResult] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    getCases()
  }, []);

  const handleSearch = (text) => {
    setSearchString(text);

    const searchFilter = cases.filter(ca => filterString(ca));

    setSearchResult(searchFilter);
  }

  const filterString = (string) => {
    const searchStringIsInTitle = string.title.toLowerCase().includes(searchString.toLowerCase());
    if (searchStringIsInTitle) return string;
  }

  const handleCloseSearch = () => {
    setSearching(!searching);
    setSearchString('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {
          searching ?
          <TextInput 
            value={searchString}
            onChangeText={(text) => handleSearch(text)}
            autoFocus={true}
          /> :
          <Text style={styles.headerText}>Processos</Text>
        }
        <TouchableOpacity onPress={handleCloseSearch}>
          <Icon name={searching ? "close" : "search"} size={30} color="#11A8F3" />
        </TouchableOpacity>
      </View>
      {
        <FlatList
         keyExtractor={item => item.id}
          data={searching? searchResult : cases}
          renderItem={({item}) => <HomeListItem item={item} />}
        />
      }
      
    </View>
  );
}

export default Home;