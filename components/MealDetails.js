import { View, Text, StyleSheet } from "react-native";


function MealDetails({duration, complexity, affordability, style, textStyle}) {
    return (
        <View style={[styles.details, style]}>
            {/* merging incoming style with default styles..new style will overwrite the old style */}
            <Text style={[styles.detailItem, textStyle]}>{duration} m</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 8,
        fontSize: 12,
    },
});