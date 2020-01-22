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
        this.page = 0 // Compteur pour connaître la page courante
        this.totalPages = 0 // Nombre de pages totales pour savoir si on a atteint la fin des retours de l'API TMDB
    }
    _searchFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
          films: [],
        }, () => { 
            console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
            this._loadFilms() 
        })
    }
    _loadFilms() {
        this.setState({ isLoading: true })
        if (this.searchedText.length >0) { //if there's text in the search bar
            getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
                this.page= data.page
                this.totalPages= data.total_pages
                this.setState({
                    films: [...this.state.films, ...data.results],  // films: this.state.films.concat(data.results) /data.results 
                    isLoading: false
                })
            });
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
        return (
            <View style={styles.main_container}>
            
                <TextInput  onSubmitEditing={ () => this._loadFilms() } onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => this._searchFilms()} />

                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item} />}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages) {
                            //checking if we arrived at the end of the pagination (totalPages) before loading more elements
                            this._loadFilms()
                        }
                    }}
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