import React, { createContext, useEffect, useState } from "react"





export const LocationContext = createContext({})



export default function LocationContextProvider({children}) {

  const [location, setLocation] = useState([undefined, undefined])

  useEffect(() => {
    async function getLocation() {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          setLocation([data.coords.latitude,data.coords.longitude])
        },
        () => {
          console.log("Error")
        }
      )
    }
    getLocation()
  }, [])


  return <LocationContext.Provider value={[location,setLocation]}>
    {children}
  </LocationContext.Provider>
}
