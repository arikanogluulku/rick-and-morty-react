import React from 'react';

function CharacterDetailItem({ info }) {
  return (
    <>
      <tr>
        <td className="character__table-title">
          {info.title}
        </td>
        <td className="character__table-value">
          {info.icon}
          {info.value}
        </td>
      </tr>
    </>

  );
}
export default CharacterDetailItem;
