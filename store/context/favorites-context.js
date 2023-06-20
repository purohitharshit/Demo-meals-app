import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
  });

  function FavoritesContextProvider({ children }){
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id){
                // parameter 'id' is the id of element that is to be added to favorite
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
        // we will update 'setFavoriteMealIds' state based on previous state
        // currentFavIds is previous state and '[...currentFavIds, id]' as new state
    }

    function removeFavorite(id){
        // parameter 'id' is the id of favorite that is to be removed
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId)=> mealId !== id));
        // if meal id is not equal to id then i want to keep it but if it would become equal this will return false and therefore item will be filtered out
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
      };
    return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );

    // All the components that are wrapped by this FavoritesContextProvider(in App.js) will be able to tap into this context and call the functions or read our ids
 
    //  **Note this is giving error**
   //     <FavoritesContext.Provider value={value}> {children} </FavoritesContext.Provider>

} 

export default FavoritesContextProvider;