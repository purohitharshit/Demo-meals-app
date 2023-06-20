import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";
import { MEALS,CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen( {route, navigation}){
   //Each screen component in your app is provided with the route prop automatically. 
   const catId = route.params.categoryId; //extracting cateoryId from categoryscreen...

   const displayedMeals = MEALS.filter((mealItem)=>{
      return mealItem.categoryIds.indexOf(catId) >=0; 
      // if we have index >=0 then that category is part of that meal..(if catId >=0 indexOf will return true)
   }) 
   
   //  below process is done to get the header of mealsOverview screen dynamically

   useLayoutEffect(()=> { // useLayoutEffect is almost same as useEffect
      const categoryTitle = CATEGORIES.find((category) => category.id===catId).title;
   // find method will find for every item in category, if found(category.id=catId) returns true else false

   navigation.setOptions({
      title: categoryTitle,
   })
   }, [catId, navigation]); // inside square braces are the dependencies(external things used here in function)
   
   return <MealsList items={displayedMeals} />
   
}

export default MealsOverviewScreen;

