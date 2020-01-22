import  React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native'
import {getFilmsFromApiWithSearchedText} from '../Api/TMDBApi'

class FilmDetail extends React.Component{
    constructor (props) {
        super (props) 
            this.state = {
                film: undefined,
                isLoading: true
            }
    }
    componentDidMount() {
        getFilmsFromApiWithSearchedText(this.props.navigation.state.params.idFilm).then(data => {
          this.setState({
            film: data,
            isLoading: false
          })
        })
    }
    _displayFilm (){
        const film = this.state.film 
        if(film != undefined) {
            return (
                <ScrollView style= {style.ScrollView_container}>
                    <Text> {film.title}</Text>
                </ScrollView>
            )
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
    render (){
        const idFilm = this.props.navigation.state.params.idFilm
        return (
            <View style={StyleSheet.main_container}>
                {this._displayFilm()}
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    main_container: {
        flex:1
    },
    loading_container: {
        paddingTop: 10,
        position: "absolute",
        left: 0,
        right: 0,
        top:0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ScrollView_container : {
        flex: 1
    }
})

export default FilmDetail