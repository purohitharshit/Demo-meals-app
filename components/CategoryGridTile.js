import { Pressable, View, Text, StyleSheet } from "react-native"; //Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.

function CategoryGridTile({title, color, onPress}){
    // in this function we add title and color prop becoz in dummy-data every category has title and color
   return(
    <View style={[styles.gridItem, {backgroundColor : color}]}>
    {/* second object(backgroundColor) is importing color from color property of Category */}
    <Pressable android_ripple={{color:'#ccc'}}
    //  style={styles.button}
    style={({pressed})=> [styles.button, pressed ? styles.buttonPressed : null]
    }
    onPress={onPress}
    // conditional styling : if button pressed then style changes(styles.buttonPressed)
    >
        <View style={styles.innerContainer}>
        <Text style={styles.title}> {title} </Text>
        </View>
    </Pressable>
   </View>
   );
    
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem:{
        flex:1, // can avail all space it can get
        margin:16,
        height:150,
        borderRadius: 10,
        elevation: 4, // for shadow
        //shadow in ios
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width: 0, height: 2},
        shadowRadius: 8,

        // to see any change in app.json you should reload whole app 
        // overflow:'hidden',// to ensure ripple effect does not go beyond rounded corners
    },
    buttonPressed:{
        opacity:0.5,
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex: 1,
        padding:16,
        justifyContent:'center', // align items vertical
        alignItems: 'center' // align items horiz
        
    },
    title:{
        fontWeight: 'bold',
        fontSize: 14,
    }
})