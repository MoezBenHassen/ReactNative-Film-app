// Navigation/Navigation.js
import { createAppContainer, defaultNavigationOptions } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Search from '../components/Search'
import FilmDetail from '../components/FilmDetail'


const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher',
      //headerTintColor: '#0073e5'
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Film Details',
      //headerTintColor: '#0073e5'
    }
  }
})

export default createAppContainer(SearchStackNavigator)