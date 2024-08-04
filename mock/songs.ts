import {AddTrack, Track} from 'react-native-track-player';

const imgUrl =
  'https://img.freepik.com/free-vector/glowing-neon-notes-tunes-music-background-disco-party-theme-vector_1017-47637.jpg?t=st=1722593417~exp=1722597017~hmac=59a9a70e2914b1172bfe91bde50f8380c3ca52e1ec9f4ec84c615466d5381226&w=1060';

export const chitChinKabyar =
  'https://wpzrqjuxozfbizahbgkf.supabase.co/storage/v1/object/sign/mp3/koaung.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtcDMva29hdW5nLm1wMyIsImlhdCI6MTcyMjYwNTgxMiwiZXhwIjoyMDM3OTY1ODEyfQ.YJEXZDr2VG2GOacS39mlovkG7VLQKhmerxNK21Gy9G4&t=2024-08-02T13%3A36%3A52.262Z';

const aPhaySakar =
  'https://wpzrqjuxozfbizahbgkf.supabase.co/storage/v1/object/sign/mp3/aungyin.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtcDMvYXVuZ3lpbi5tcDMiLCJpYXQiOjE3MjI2OTA4NDEsImV4cCI6MjAzODA1MDg0MX0.LeH66iWl21pBCuXEcI_7VXW90mzDeMs3XJxqcou4Kzw&t=2024-08-03T13%3A14%3A01.061Z';

const alinSaing =
  'https://wpzrqjuxozfbizahbgkf.supabase.co/storage/v1/object/sign/mp3/alinsaing.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtcDMvYWxpbnNhaW5nLm1wMyIsImlhdCI6MTcyMjY5MDg2OCwiZXhwIjoyMDM4MDUwODY4fQ.fOBG4bylMIetfwhZ7MiYjwSpioCPgsiEeaxOOFeF5cM&t=2024-08-03T13%3A14%3A28.137Z';

const maeLiteTot =
  'https://wpzrqjuxozfbizahbgkf.supabase.co/storage/v1/object/sign/mp3/maelitetot.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtcDMvbWFlbGl0ZXRvdC5tcDMiLCJpYXQiOjE3MjI2OTA4OTEsImV4cCI6MjAzODA1MDg5MX0.U2dv1JWYncLVj9ermLf1YtHYF6wQMKK5SGPQoeiPWHg&t=2024-08-03T13%3A14%3A51.475Z';

export const song: Track = {
  artist: 'Ko Aung',
  url: chitChinKabyar,
  title: 'ChitChinnKabyar',
  // artwork: imgUrl,
};

export const chitChinKabyarSong = {
  artist: 'Ko Aung',
  id: '1',
  url: chitChinKabyar,
  title: 'ChitChinnKabyar',
  // artwork: imgUrl,
};
export const aPhaySakarSong = {
  artist: 'Aung Yin',
  url: aPhaySakar,
  title: 'APhaySaKar',
  // artwork: imgUrl,
  id: '2',
};
export const alinSaingSong : AddTrack= {
  artist: 'Htoo Eain Thin',
  url: alinSaing,
  title: 'ALinSaing',
  // artwork: imgUrl,
  id: '3',
};

export const maeLiteTotSong = {
  artist: 'Htoo Eain Thin',
  url: maeLiteTot,
  title: 'Mae Lite Tot',
  artwork: imgUrl,
  id: '4',
};

export const recommandSongs = [
  chitChinKabyarSong,
  alinSaingSong,
  aPhaySakarSong,
  maeLiteTotSong,
];

export const songsWithCategories = [
  {
    title: 'Recommended Songs',
    songs: recommandSongs,
  },
];
