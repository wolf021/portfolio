'use client'

import { useEffect, useState,useRef } from "react"



const useFetchUsers = (url) => {
    const [user, setUser] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

const uniqueIdentifier = useRef(Math.random());

const fetchUsers = ()=>{
  
    console.log('Fetching users...', uniqueIdentifier.current);
   
    fetch(url)
    .then(res=>{
        if(!res.ok){
            throw new Error(`HTTP error! Status: ${res.status}`)
        }
        return res.json()
    })
    .then((data)=>{ setUser(data.results)
        
    setError(null)
    })
    .catch((error) =>{
        setError(error.message)
})
.finally(
    setLoading(false)
)
}

useEffect(()=>{
fetchUsers()


},[])




  return {user,loading,error,fetchUsers}
}

export default useFetchUsers