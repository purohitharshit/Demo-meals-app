import { Text, View, StyleSheet} from "react-native"
function List({data}){
    return(
        data.map((dataPoint)=>(
            <View key={dataPoint} style={styles.ListItem}>
            <Text style={styles.itemText}>{dataPoint}</Text>
            </View>
            // key is unique becoz every element is unique
        ))
    )
}

export default List;

const styles = StyleSheet.create({
    ListItem:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 12,
        marginHorizontal: 8,
        marginVertical: 8, 
        backgroundColor:'#7c8083'
    },
    itemText:{
        color:'#51495f',
        fontSize: 14

    }
});