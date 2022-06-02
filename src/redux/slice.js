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
           
            
            const s=state.episodeFavourite.filter((item)=> 
            item.url===action.payload.url)
            if (s.length===0) {
            state.episodeFavourite.push(action.payload)
            }
            
        },
        addShowFavourite: (state, action)=> {
           const s=state.showFavourite.filter((item)=> 
           item.url===action.payload.url)
           if (s.length===0) {
           state.showFavourite.push(action.payload)
           }
            
        },
        removeEpisodeFavourite: (state, action)=> {
            state.episodeFavourite= state.episodeFavourite.filter((item)=>
            item.url!==action.payload.url)
        },
        removeShowFavourite: (state, action)=> {
                state.showFavourite= state.showFavourite.filter((item)=>
                 item.url!==action.payload.url)
        },
        addShowLike: (state, action)=> {
            if (!state.showLike.includes(action.payload)) {
            state.showLike.push(action.payload) 
            }
        },
        addEpisodeLike: (state, action)=> {
            if (!state.episodeLike.includes(action.payload)) {
            state.episodeLike.push(action.payload)
            }
        },
        removeShowLike: (state, action) => {
            state.showLike= state.showLike.filter((item)=>
            item.url!==action.payload.url)
        },
        removeEpisodeLike: (state, action)=> {
            state.episodeLike= state.episodeLike.filter((item)=>
            item.url!==action.payload.url)

        }


    }
}
)
export const {addEpisodeFavourite, addShowFavourite,
removeEpisodeFavourite,
removeShowFavourite,
addShowLike,
addEpisodeLike,
removeShowLike,
removeEpisodeLike}= appSlice.actions
export default appSlice.reducer
