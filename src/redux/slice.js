import { createSlice } from "@reduxjs/toolkit";
export const appSlice= createSlice({
    name:'favourite',
    initialState: {
       episodeFavourite: [],
       showFavourite:[],
       episodeLike: [],
       showLike: []
    },
    reducers:{ 
        addEpisodeFavourite: (state,action)=> {
           state.episodeFavourite.push(action.payload)
        },
        addShowFavourite: (state, action)=> {
           state.showFavourite.push(action.payload)
        },
        removeEpisodeFavourite: (state, action)=> {

        },
        removeShowFavourite: (state, action)=> {

        },


    }
}
)
export const {addEpisodeFavourite, addShowFavourite,
removeEpisodeFavourite,
removeShowFavourite}= appSlice.actions
export default appSlice.reducer
