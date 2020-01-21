// Components/Search.js

import React from 'react'
import { StyleSheet,View, TextInput, Button, FlatList, Text, Image } from 'react-native'
import films from '../Helpers/filmData'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../Api/TMDBApi'
class Search extends React.Component {

    constructor (props){
        super (props)
        this.state = { 
            films: []
         }
         this.searchedText =""
    }
    _loadFilms() {
        if (this.searchedText.length >0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => this.setState({films: data.results}));
        }
    }
    _searchTextInputChanged (text){
        this.searchedText = text
    }
    render() {
        console.log ("RENDER")
        return (
            <View style={styles.main_container}>
            
                <TextInput onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>

                <FlatList
                data={this.state.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item} />}
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