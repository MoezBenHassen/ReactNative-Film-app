// Components/Search.js

import React from 'react'
import { StyleSheet,View, TextInput, Button, FlatList, Text, Image, ActivityIndicator, ProgressBarAndroid } from 'react-native'
import films from '../Helpers/filmData'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../Api/TMDBApi'
class Search extends React.Component {

    constructor (props){
        super (props)
        this.state = { 
            films: [],
            isLoading: false
         }
         this.searchedText =""
    }
    _loadFilms() {
        this.setState({ isLoading: true })
        if (this.searchedText.length >0) { //if there's text in the search bar
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => this.setState({
                films: data.results,
                isLoading: false
            }));
        }
    }
    _displayLoading () {
        if (this.state.isLoading){
           return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color='gray' />
                </View>
            );
        }
    }
    _searchTextInputChanged (text){
        this.searchedText = text
    }
    render() {
        console.log (this.state.isLoading)
        return (
            <View style={styles.main_container}>
            
                <TextInput  onSubmitEditing={ () => this._loadFilms() } onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>

                <FlatList
                data={this.state.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item} />}
                />
                {this._displayLoading()}
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

        },
        loading_container: {
            paddingTop: 10,
            position: "absolute",
            left: 0,
            right: 0,
            top:100,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
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