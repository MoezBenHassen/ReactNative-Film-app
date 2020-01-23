import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView
} from "react-native";
import {
  getFilmsFromApiWithSearchedText,
  getFilmDetailFromApi,
  getImageFromApi
} from "../Api/TMDBApi";
import moment from 'moment'
import numeral from  'numeral'

class FilmDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: undefined,
      isLoading: true
    };
  }
  componentDidMount() {
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(
      data => {
        this.setState({
          film: data,
          isLoading: false
        });
      }
    );
  }
  _displayFilm() {
    const film = this.state.film;
    if (film != undefined) {
      console.log({film})
      return (
        
        <ScrollView style={StyleSheet.ScrollView_container}>
         <Image
            style= {styles.image} 
            source= {{uri: getImageFromApi(film.backdrop_path)}}/>
          <Text style= {styles.title_text}> {film.title}</Text>
          <Text style= {styles.description_text}>
            {film.overview}
          </Text>
          <Text style={styles.default_text}>
            <Text style={styles.bolding}>Sorti le: </Text>  {moment(new Date(film.release_date)).format('DD/MM/YYYY')}
          </Text>
          <Text style={styles.default_text}>
            <Text style = {styles.bolding }>Note: </Text> {film.vote_average} / 10
          </Text>
          <Text style={styles.default_text}>
            <Text style = {styles.bolding}>Nombres de votes:</Text>  {film.vote_count}
          </Text>
          <Text style={styles.default_text}>
            <Text style = {styles.bolding}>Budget: </Text> 
            {numeral(film.budget).format('0,0[.]00 $')}
          </Text>
          <Text style={styles.default_text}>
            <Text style = {styles.bolding}>Genre(s): </Text>  
            {film.genres.map(function(genre){
              return genre.name;
            }).join(" / ")}
          </Text>
          <Text style={styles.default_text}>
            <Text style = {styles.bolding}>Companie(s): </Text>
            {film.production_companies.map(function(company){
              return company.name;
            }).join(" / ")}
          </Text>
        </ScrollView>
      );
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={StyleSheet.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
  render() {
    const idFilm = this.props.navigation.state.params.idFilm;
    return (
      <View style={StyleSheet.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  bolding: {
    fontWeight: 'bold'
  },
  image : {
    height: 169,
    marginTop: 0
  },
  header_container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title_text: {
      fontWeight: 'bold',
      fontSize: 26,
      margin: 5,
      textAlign: 'center',
      flexWrap: 'wrap'
  },
  default_text: {
    margin: 5
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5
  },
  loading_container: {
    paddingTop: 10,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  ScrollView_container: {
    flex:1
  }
});

ScrollView_container: {
  flex:1


}


export default FilmDetail;
