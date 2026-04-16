import axios from "axios"
import { useEffect, useState } from "react"


const Details = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get()
      setData(response.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Details
