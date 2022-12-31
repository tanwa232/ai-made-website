import React, { useState, useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa';

const YoutubePanel = () => {
  const [subscribers, setSubscribers] = useState(0);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/youtube');
      const data = await result.json();

      setSubscribers(data.subscribers);
      setViews(data.views);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FaYoutube className="w-6 h-6 mr-2 text-gray-600" />
          <h2 className="text-lg font-bold text-gray-800">YouTube</h2>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="flex-1 text-center">
          <p className="text-sm font-bold text-gray-600">SUBSCRIBERS</p>
          <p className="text-2xl font-bold text-gray-800">{subscribers}</p>
        </div>
        <div className="flex-1 text-center border-l border-gray-300">
          <p className="text-sm font-bold text-gray-600">VIEWS</p>
          <p className="text-2xl font-bold text-gray-800">{views}</p>
        </div>
      </div>
    </div>
  );
};

export default YoutubePanel;
