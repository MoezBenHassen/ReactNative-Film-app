// Components/Search.js

import React from 'react'
import { StyleSheet,View, TextInput, Button, FlatList, Text, Image } from 'react-native'
import films from '../Helpers/filmData'
import FilmItem from './FilmItem'

class Search extends React.Component {

  /*render() {
    return (
      <View style={{ flex: 1,flexDirection: 'row', backgroundColor: 'yellow' }}>
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        <View style={{ flex: 1, backgroundColor: 'green' }}></View>
      </View>
    )
}
*/
/*
render() {
    return (
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center',backgroundColor: 'yellow' }}>
        <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
        <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
        <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
      </View>
    )
 }
}*/

render() {
    return (
        <View style={styles.main_container}>
        
            <TextInput style={styles.textinput} placeholder='Titre du film'/>
            <Button title='Rechercher' onPress={() => {}}/>

            <FlatList
            data={films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem/>}
            />
        </View>
    )
  }
}



const styles = StyleSheet.create({
    main_container: {
        marginTop:50
    },
    textinput: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5

    }
})

export default Search