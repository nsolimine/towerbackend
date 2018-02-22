exports.seed = function(knex, Promise) {
  return knex('intermediate').del()
    .then(() => {
      return knex('intermediate').insert([{
          id: 1,
          difficulty: 'Intermediate',
          artist: 'Derek & The Dominoes',
          song: 'Layla',
          technique: 'Layla utilizes hammer-ons and pull-offs, slide guitar, and whole step bends.',
          url: 'https://www.youtube.com/watch?v=XVGTGW0cCw8'
        },{
          id: 2,
          difficulty: 'Intermediate',
          artist: 'Pink Floyd',
          song: 'Wish You Were Here',
          technique: 'Wish You Were Here incorporates an iconic acoustic melody that requires slides and pull-offs.',
          url: 'https://www.youtube.com/watch?v=IXdNnw99-Ic'
        },{
          id: 3,
          difficulty: 'Intermediate',
          artist: 'Foo Fighters',
          song: 'Everlong',
          technique: 'Everlong is written in drop-d tuning, and requires complex picking and sliding octaves.',
          url: 'https://www.youtube.com/watch?v=crOZk88eCcg'
        },{
          id: 4,
          difficulty: 'Intermediate',
          artist: 'Red Hot Chili Peppers',
          song: 'Under The Bridge',
          technique: 'Under The Bridge is a great foundation to begin learning to fingerpick, and how to use bar chords with suspensions.',
          url: 'https://www.youtube.com/watch?v=4UnU3r0M3zg'
        },{
          id: 5,
          difficulty: 'Intermediate',
          artist: 'The White Stripes',
          song: 'Blue Orchid',
          technique: 'Blue Orchid utilizes space within the time signiture to create really fun to play heavy riffs.',
          url: 'https://www.youtube.com/watch?v=YuWfCmbo0Hk'
        }]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE intermediate_id_seq RESTART WITH 6;');
    });
};
