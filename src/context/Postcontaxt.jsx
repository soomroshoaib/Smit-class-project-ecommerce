import { createContext, useState } from "react"


const PostContext = createContext()

export const PostProvider = ({children})=>{
    const [post, setPost] = useState([
        {id: 1, title: "post One "},
        {id: 2, title: "post 2 "},
        {id: 3, title: "post 3 "},
        {id: 4, title: "post 4 "}
    ])
   return <PostContext.Provider value={{post}}>
        {children}

    </PostContext.Provider>

}
export default PostContext;