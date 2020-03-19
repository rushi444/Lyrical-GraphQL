import React, { useState } from 'react';

export const SongCreate = (props) => {
  const [title, setTitle] = useState('');
  return (
    <div>
      <h3>Create a New Song</h3>
      {/* <form>
        <label>Song Title:</label>
        <input
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </form> */}
    </div>
  );
};
