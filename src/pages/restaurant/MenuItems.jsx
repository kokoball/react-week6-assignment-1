import React from 'react';

export default function MenuItems({ menuItems }) {
  if (!menuItems) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <ul>
      {menuItems.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
}