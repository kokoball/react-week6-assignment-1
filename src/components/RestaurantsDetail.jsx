import React from 'react';

export default function RestaurantsDetail({ restaurantsDetail }) {
  const { name, address, menuItems } = restaurantsDetail;
  if (!restaurantsDetail.name) {
    return (<h2>Loading</h2>);
  }

  return (
    <>
      <h2>{name}</h2>
      <p>{`주소 : ${address}`}</p>
      <h3>메뉴</h3>
      <ul>
        {menuItems?.map(({ id, restaurantsId, name: menuName }) => (
          <li key={`${restaurantsId}-${id}`}>
            {menuName}
          </li>
        ))}
      </ul>
    </>
  );
}