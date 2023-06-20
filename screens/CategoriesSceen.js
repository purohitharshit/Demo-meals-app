import { FlatList } from "react-native";//The FlatList component displays the similar structured data in a scrollable list. 
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";


function CategoriesScreen({navigation}){
                //navigation passed in function is a special prop provided by RN
    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview',{
                categoryId : itemData.item.id,
            });
            //passed the page name you want to navigate to the function(here is MealsOverview)
        } 
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    }
    return (
        <FlatList 
        key={'_'} // this is done to remove error of numcolums prop
        data = {CATEGORIES} 
        keyExtractor={(item)=>item.id} 
        renderItem={renderCategoryItem}
        numColumns={2}/>
    //keyExtractor is a prop in flatlist(this is to handle to keys having same values)
    //renderItem takes an item from data and renders it into the list.
    //numColumns is to render items in no of colums

    );
}

export default CategoriesScreen;