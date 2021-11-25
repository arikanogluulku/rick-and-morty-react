import React from 'react';
import episodeBack from '../../assets/episodeback.gif';
import './style.scss';

function EpisodeList({ data }) {
  return (
    <div className="episodes__container">
      {
        data.map(((episode) => (
          <div className="episodes__card" key={episode.id}>

            <img src={episodeBack} alt={episode.name} />

            <div className="episodes__card-info">
              <p className="episode__name">{episode.name}</p>
              <p className="episode__date">
                <i className="fa fa-calendar" />
                {episode.air_date}
              </p>
            </div>

          </div>
        )))
      }
    </div>
  );
}
export default EpisodeList;
