import { createContext,useState } from "react";
import { useReducer } from "react";
import githubReducer from "./GIthubReduces";

const GithubContext =createContext();



export const GithubProvider = ({children})=>{
    const initialState ={
         users:[],
         user:{},
        loading:false,
        repos:[],
    }
    
       // const [users,setUsers] =useState([])
    //const [loading,setLoading] =useState(true);
    

    const [state,dispatch]= useReducer(githubReducer,initialState);

    const clearUsers=()=>{
        dispatch({
            type: 'CLEAR_USERS',
            
        })

    }
    
    //search users
    const searchUsers= async (text) =>{
        
        setLoading();

        const params = new URLSearchParams({
            q: text
        })
        console.log("text is " + text);
        const response = await fetch(`https://api.github.com/search/users?${params}`,{
            headers:{
                Authorization:`token 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`,
            },
        })
        const {items} = await response.json();
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
        // setUsers(data)
        // setLoading(false)
    
    }

    // get user 
    const getUser= async (login) =>{
        
        setLoading();

      
        
        const response = await fetch(`https://api.github.com/users/${login}`,{
            headers:{
                Authorization:`token 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`,
            },
        })

        if(response.status === 4040)
        {
            window.location = '/notfound'
        }
        else{
            const data = await response.json();
            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }
        
        // setUsers(data)
        // setLoading(false)
    
    }
    // get user repos
    const getUserRepos= async (login) =>{
        
        setLoading();

        const params = new URLSearchParams({
            sort: 'created',
            per_page:10,
        })

      
        
        const response = await fetch(`https://api.github.com/users/${login}/repos?${params}`,{
            headers:{
                Authorization:`token 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`,
            },
        })

        if(response.status === 4040)
        {
            window.location = '/notfound'
        }
        else{
            const data = await response.json();
            dispatch({
                type: 'GET_USERREPOS',
                payload: data,
            })
        }
        
        // setUsers(data)
        // setLoading(false)
    
    }

    const setLoading = () => dispatch({type:'SET_LOADING'})

    return (
    <GithubContext.Provider value={
        {users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
    }}>
        {children}
    </GithubContext.Provider>
    )
}

export default GithubContext;