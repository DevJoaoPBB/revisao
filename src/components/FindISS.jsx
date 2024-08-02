import React, { useState, useEffect } from "react";

const FindISS = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const fetchISSLocation = async () => {
      try {
        const response = await fetch("http://api.open-notify.org/iss-now.json");
        const data = await response.json();
        setLocation({
          latitude: data.iss_position.latitude,
          longitude: data.iss_position.longitude,
        });
      } catch (error) {
        console.error("Error fetching ISS location:", error);
      }
    };

    fetchISSLocation();
    const interval = setInterval(fetchISSLocation, 10000);

    return () => clearInterval(interval);
  }, []);

  const iframeSrc = `https://www.google.com/maps?q=${location.latitude},${location.longitude}&hl=pt;z=5&output=embed`;

  return (
    <div>
      <iframe
        src={iframeSrc}
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Mapa da ISS"
      ></iframe>
    </div>
  );
};

export default FindISS;
