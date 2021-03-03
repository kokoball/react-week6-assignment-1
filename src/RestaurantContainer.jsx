import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { loadRestaurant, setRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(setRestaurant({ id }));
    dispatch(loadRestaurant());
  }, []);

  if (!restaurant.name) {
    return (
      <p>loading</p>
    );
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <address>
        주소:
        {' '}
        {restaurant.address}
      </address>
      <h2>메뉴</h2>
      <ul>
        {restaurant.menuItems
          ? restaurant.menuItems.map((menu) => (
            <li key={menu.id}>
              {menu.name}
            </li>
          ))
          : (
            <p>메뉴가 없어요</p>
          )}

      </ul>
    </div>
  );
}
