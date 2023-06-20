import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

function MealsList({items}){
    function renderMealItem(itemData) {
        const item = itemData.item; // 'item' here is helper constant
  
        const mealItemProps ={
           id : item.id,
           title : item.title,
           imageUrl : item.imageUrl,
           duration : item.duration,
           complexity : item.complexity,
           affordability : item.affordability
        }
        return (
           <MealItem {...mealItemProps}/>
           // ... is to distribute all the properties inside object as props 
        )
        // return <MealItem title = {itemData.item.title} imageUrl={itemData.item.imageUrl} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability}/> 
        //MealItem function from MealItem.js
        // imageUrl from Mealitem function in MealItem.js
        //itemData.item will refer to individual item output by flatlist(inside return of JSX code below)
     }
  
       return(
          <View style={styles.container}>
              {/* <Text>Meals Overview - {catId}</Text> */}
              <FlatList 
              data = {items} 
              keyExtractor={(item) => item.id}
              renderItem={renderMealItem}/>
              {/* we want to access the id property of item and use it as a key */}
              {/* renderItem - Takes an item from data and renders it into the list */}
              {/* renderItem here will point to a function that is responsible for rendering item */}
          </View>
       )
}

export default MealsList;

const styles = StyleSheet.create({
    container:{
     flex:1,
     padding:16,
    }
 });