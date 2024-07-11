const songs = [
    './audio/alex&reus.mp3',
    './audio/da da da.mp3',
    './audio/gangsta-paradise.mp3',
    './audio/kosandra.mp3',
    './audio/on_my-way.mp3',
  ];
  
  let currentSongIndex = 0;
  const audio = new Audio(songs[currentSongIndex]);
  const playPauseButton = document.getElementById('playPauseButton');
  const rewindButton = document.getElementById('rewindButton');
  const forwardButton = document.getElementById('forwardButton');
  const nextButton = document.getElementById('nextButton');
  const songSelect = document.getElementById('songSelect');
  const errorMessage = document.getElementById('error-message');
  
  let isPlaying = false;
  
  playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playPauseButton.textContent = 'Play';
    } else {
      audio.play();
      playPauseButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
  });
  
  rewindButton.addEventListener('click', () => {
    audio.currentTime -= 10;
  });
  
  forwardButton.addEventListener('click', () => {
    audio.currentTime += 10;
  });
  
  nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = 'Pause';
    songSelect.value = songs[currentSongIndex];
  });
  
  songSelect.addEventListener('change', (e) => {
    audio.src = e.target.value;
    currentSongIndex = songs.indexOf(e.target.value);
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = 'Pause';
  });
  
  audio.addEventListener('error', () => {
    errorMessage.textContent = 'Error: Unable to load audio file.';
    console.error('Audio error:', audio.error);
  });
  
  audio.addEventListener('canplaythrough', () => {
    errorMessage.textContent = ''; // Clear error message when audio loads successfully
  });
  