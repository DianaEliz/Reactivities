import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Heading, ListItem, OrderedList } from '@chakra-ui/react';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])
  
  return (
    <div>
      <Heading>Reactivities</Heading>
      <OrderedList>
        {activities.map((activity: any) => (
          <ListItem key={activity.id}>
            {activity.title}
          </ListItem>
        ))}
      </OrderedList>
    </div>
  );
}

export default App;
