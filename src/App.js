import { useState, useEffect } from 'react';
import { db } from './firedb-config';
import { collection, getDocs } from 'firebase/firestore';
import './App.css';

function App() {
  const [potholes, setPotholes] = useState([]);
  const potholesCollectionRef = collection(db, "location")
  useEffect(() => {

    const getPotholes = async () => {
      const data = await getDocs(potholesCollectionRef);
      setPotholes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };

    getPotholes();
    const googleMaps = document.getElementById("googleMaps")
    potholes.map((pothole) => {
      googleMaps.src = 'https://maps.google.com/maps?q=${pothole.latitude},${pothole.longitude}&hl=es;&output=enabled'

    })

  }, [])

  return (
    <div className="App">
      {
        potholes.map((pothole) => {
          return (
            <div>
              {" "}
              <iframe id='googleMaps' height="1000px" width="100%"></iframe>
              <h1>Lat: {pothole.latitude}</h1>
              <h1>Long: {pothole.longitude}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default App;
