import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const SongList = ({ data }) => {
  const renderSongs = () => {
    return data.songs.map(song => (
      <li key={song.id} className='collection-item'>
        {song.title}
      </li>
    ));
  };

  return (
    <ul className='collection'>
      {data.loading ? <div>Loading</div> : renderSongs()}
    </ul>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
