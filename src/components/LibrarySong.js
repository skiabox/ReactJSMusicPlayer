const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    // Add Active State
    const newSongs = songs.map(song => {
      if (song.id === id) {
        return {
          ...song,
          active: true
        };
      }
      return {
        ...song,
        active: false
      };
    });
    setSongs(newSongs);
    // check if the song is playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
