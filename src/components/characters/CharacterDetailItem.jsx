import React from 'react';

function CharacterDetailItem({ title, icon, value }) {
  return (
    <>
      <tr>
        <td className="character__table-title">
          {title}
        </td>
        <td className="character__table-value">
          {icon || ''}
          {value}
        </td>
      </tr>
    </>

  );
}
export default CharacterDetailItem;
