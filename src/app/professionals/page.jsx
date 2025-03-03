'use client'
import React, { useState, useEffect } from 'react';
import PsyCard from '@/components/PsyCard';

const fetchPsychiatrists = async (lat, lng) => {
    const response = await fetch(`https://discover.search.hereapi.com/v1/discover?at=${lat},${lng}&q=psychiatrist&apiKey=${process.env.NEXT_PUBLIC_PROF_API}`);
  if (!response.ok) {
    throw new Error('Failed to fetch psychiatrists');
  }
  return response.json();
};

const fetchUserLocation = () => { 
  return new Promise((resolve, reject) => { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          reject(error);
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
};

const ProfessionalsPage = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [psychiatrists, setPsychiatrists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLocationFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const location = await fetchUserLocation();
      setUserLocation(location);
      const data = await fetchPsychiatrists(location.lat, location.lng);
      setPsychiatrists(data.items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mb-[100px]'>
      <div className="bg-cover bg-center h-[700px] bg-blend-multiply pt-[200px]" style={{ backgroundImage: "url('/images/psy1.jpg')", backgroundColor: "rgba(0, 0, 0, 0.6)", backgroundBlendMode: "multiply" }}>
        <div className='text-[white] lg:text-8xl text-5xl font-bold text-center w-full'>Psychiatrists near you</div>
        <div className='flex justify-center'>
          <button onClick={handleLocationFetch} disabled={loading} className='fetch mt-10'>
            {loading ? 'Fetching Details...' : 'Find psychiatrists'}
          </button> 
        </div>
      </div>
      {error && <p>Error: {error}</p>}
      <div className='flex justify-center items-center pt-8'>
        {psychiatrists.length > 0 && (
          <div>
            {psychiatrists.map((psy, index) => (
              <PsyCard item={psy} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalsPage;
