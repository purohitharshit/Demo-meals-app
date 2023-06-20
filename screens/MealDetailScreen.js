import { View, Text, Image, StyleSheet, ScrollView,Button } from 'react-native';
import { useContext, useLayoutEffect } from 'react';

import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailScreen({ route, navigation }) {

    const favoriteMealsCtx = useContext(FavoritesContext);
    // So in meal detail screen,we can pass favorites context into use context hook.
    // and with this now we can do a couple of things.we can find out whether that meal currently is our favorite or not

    const mealId = route.params.mealId; // here we are accessing mealId from navigation.navigate in MealItem.js
    //route prop gives us access for the params object that were set for this route 

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    //selectedMeal will give access to image,title and all properties in meal model in meal.js

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)
    // include will return true if this meal ID is part of this IDs array

    function changeFavoriteStatusHandler(){
    //   console.log('pressed!');
    if(mealIsFavorite){
        favoriteMealsCtx.removeFavorite(mealId); //This would then switch this meal from favorite to non favorite.
    }else{
        favoriteMealsCtx.addFavorite(mealId);
    }
    }

    useLayoutEffect(()=>{
       navigation.setOptions({
        headerRight:()=>{
            return <IconButton
            //  icon="star"
             icon = {mealIsFavorite ? 'star' : 'star-outline'}
             color="white" 
             onPress={changeFavoriteStatusHandler}/>
        }
       })
    },[navigation,changeFavoriteStatusHandler]); 

    return (
        <ScrollView style={styles.rootContainer}> 
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            {/* for a network image URL you must set width&height else will not be displayed */}
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />

            <View style={styles.ListOuterContainer}>
            <View style={styles.ListContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />


                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>

            </View>

        </ScrollView>
    );

}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
    marginBottom:32,
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    ListOuterContainer:{
        alignItems:'center',
    },
    ListContainer: {
        width: '80%',
    }

});
