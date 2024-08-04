type SongType = {
  name: string;
  artist: string;
  url: string;
  img: string;
};


type SongWithCategory = {
     title : string;
     songs : SongType[]
}