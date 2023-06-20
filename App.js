import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import CategoriesScreen from './screens/CategoriesSceen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
//createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator
// 'stack' is now a object with 2 properties
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#202D48' }, // header bgcolor
      headerTintColor: '#CEDEFE',//header content color
      sceneContainerStyle: { backgroundColor: '#303848' }, // main page bgcolor
      drawerContentStyle: { backgroundColor: '#202D48' },
      drawerInactiveTintColor: 'white',
      drawerActiveBackgroundColor: 'white',
      drawerActiveTintColor: 'blue',
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title: "All categories",
        drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
      }} />
      <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
        drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
      }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#202D48' }, // header bgcolor
            headerTintColor: '#CEDEFE',//header content color
            contentStyle: { backgroundColor: '#303848' } // main page bgcolor
          }}>
            <Stack.Screen name="Drawer" component={DrawerNavigator}
              options={{
                // title: 'All Categories',
                headerShown: false,
                // headerStyle : {backgroundColor: '#202D48'}, // header bgcolor
                // headerTintColor: '#CEDEFE',//header content color
                // contentStyle: {backgroundColor: '#303848'} // main page bgcolor
                //* to add these options on multiple screens put them in Stack.Navigator > screenOptions
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
            //  below process is done to get the header of mealsOverview screen dynamically
            // options={({route, navigation}) =>{
            //   const catId = route.params.categoryId; //extracting cateoryId from categoryscreen...
            //   return ({
            //     title: catId,
            // })
            // }} 
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen}
              options={{
                title: "About the meal",
              }}
            // options={{
            //   headerRight:()=>{
            //     return <Button title='Tap me' onPress/>
            //   }
            //   }}
            //above method is not useful when we want to interact button with screen components
            />
          </Stack.Navigator>
          {/* <CategoriesScreen /> */}

        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
