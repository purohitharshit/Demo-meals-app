import { View, Text, StyleSheet } from "react-native";

function Subtitle({children}){
    return(
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle:{
        color:'#7c8083',
        fontSize: 18,
        fontWeight:'bold',
        textAlign:'center',
        
    },
    subtitleContainer:{
        borderBottomColor:'#7c8083',
        borderBottomWidth: 2,
        marginHorizontal:22,
        marginVertical:20,
        padding: 6,
    }
});