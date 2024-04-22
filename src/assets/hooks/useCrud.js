import axios, { Axios } from "axios"
import { useState } from "react"

 const useCrud = (base) => {
    const [apiData, setapiData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    
    //leer

    const getApi = (path) => {
        const url  = `${base}${path}/`
        setIsComplete(false)
        axios.get(url)
            .then((res) => {
                 setapiData(res.data)
                 setIsLoading(false)
                 console.log(res.data)
 
            })
            .catch((error) => {
                 setIsError(true)
                 console.log(error)
             })
    }
    //crear
    const postApi = (path, data) => {
        const url  = `${base}${path}/`
        setIsComplete(false)
        axios.post(url, data)
            .then((res) => {
                setapiData([...apiData, res.data])
                 setIsLoading(false)
                 console.log(res.data)
            })
            .catch((error) => {
                 setIsError(true)
                 console.log(error)
             })
            .finally(() => {
                setIsComplete(true)
            })
            }
        //eliminar
        const deleteApi = (path, id) => {
            const url  = `${base}${path}/${id}/`
            setIsComplete(false)
        
            axios.delete(url, id)
                .then(() => {
                    setapiData(apiData.filter((user) => user.id !== id))

                    console.log("deleted")
                })
                .catch(err => console.log(err))
         }

         //actualizar
         const patchApi = (path, data, id) => {
            const url = `${base}${path}/${id}/`
            setIsComplete(false)

            axios.patch(url, data)
            .then((res) => {
                setapiData(apiData.map((user) => user.id === id? res.data : user))
            })
            .catch((error) => {
                 setIsError(true)
                 console.log(error)
             })
            .finally(() => {
                setIsComplete(true)
            })
            }
        
            



return [apiData, getApi, postApi, deleteApi, patchApi, isError, isLoading, isComplete]
}

export default useCrud