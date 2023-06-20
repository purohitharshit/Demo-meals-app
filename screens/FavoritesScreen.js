import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen(){
   const favoriteMealsCtx = useContext(FavoritesContext);
   
   const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))

//    So we take a look at all the meals in the raw data,and if the ID of a meal
//    is included in our Favorite Meal IDs,we return true, and therefore the Item will be kept
//    in the newly created array that is returned by filter.
//    So filter will return an array with all the meals that have an entry in our IDs array in our context.

if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

return <MealsList items={favoriteMeals}/> 

    
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
  });