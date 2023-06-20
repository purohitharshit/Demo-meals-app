import { Text,View, StyleSheet, Pressable} from "react-native";
import { Ionicons } from '@expo/vector-icons';

function IconButton({onPress, icon, color}){
    // whichever function we recieve on this prop(onPress) we forward that to onPress prop of pressable
   return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}> 
    {/* if button pressed is true then styling is applied */}
     <Ionicons name={icon} size={24} color={color}/>
    </Pressable>
   )
}

export default IconButton;

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.5,
    }
});