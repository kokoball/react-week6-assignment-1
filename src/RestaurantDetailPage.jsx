import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { loadRestaurant } from './actions';

import RestaurantDetailContainer from './RestaurantDetailContainer';

export default function RestaurantDetailPage({ params }) {
  const { restaurantId } = params || useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  return (
    <RestaurantDetailContainer />
  );
}