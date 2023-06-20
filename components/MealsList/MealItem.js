import { Text, View, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();//useNavigation is a hook which gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly

    function selectMealItemHandler(){
        navigation.navigate('MealDetail',{
            mealId : id, // taking id prop from MealItem into mealId
        });
    }

    
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color : '#ccc'}} 
             style={({pressed})=> (pressed ? styles.buttonPressed : null)}
             onPress = {selectMealItemHandler}
             >
                <View style={styles.innerConatiner}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        {/* uri is url pointing to an image */}
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    {/* <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration} m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View> */}
                    {/* instead of writing above lines we will write */}
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.45,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerConatiner:{
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    // details: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     padding: 8,
    // },
    // detailItem: {
    //     marginHorizontal: 8,
    //     fontSize: 12,
    // },
    buttonPressed:{
        opacity:0.8,
    },
});