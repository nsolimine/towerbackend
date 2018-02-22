
exports.seed = function(knex, Promise) {
  return knex('intermediate').del()
    .then(() => {
      return knex('intermediate').insert([{
          intermediateId: 1,
          intermediateDifficulty: 'Intermediate',
          intermediateArtist: 'Derek & The Dominoes',
          intermediateSong: 'Layla',
          intermediateTechnique: 'Layla utilizes hammer-ons and pull-offs, slide guitar, and whole step bends.',
          intermediateUrl: 'https://www.youtube.com/watch?v=XVGTGW0cCw8'
        },{
          intermediateId: 2,
          intermediateDifficulty: 'Intermediate',
          intermediateArtist: 'Pink Floyd',
          intermediateSong: 'Wish You Were Here',
          intermediateTechnique: 'Wish You Were Here incorporates an iconic acoustic melody that requires slides and pull-offs.',
          intermediateUrl: 'https://www.youtube.com/watch?v=IXdNnw99-Ic'
        },{
          intermediateId: 3,
          intermediateDifficulty: 'Intermediate',
          intermediateArtist: 'Foo Fighters',
          intermediateSong: 'Everlong',
          intermediateTechnique: 'Everlong is written in drop-d tuning, and requires complex picking and sliding octaves.',
          intermediateUrl: 'https://www.youtube.com/watch?v=crOZk88eCcg'
        },{
          intermediateId: 4,
          intermediateDifficulty: 'Intermediate',
          intermediateArtist: 'Red Hot Chili Peppers',
          intermediateSong: 'Under The Bridge',
          intermediateTechnique: 'Under The Bridge is a great foundation to begin learning to fingerpick, and how to use bar chords with suspensions.',
          intermediateUrl: 'https://www.youtube.com/watch?v=4UnU3r0M3zg'
        },{
          intermediateId: 5,
          intermediateDifficulty: 'Intermediate',
          intermediateArtist: 'The White Stripes',
          intermediateSong: 'Blue Orchid',
          intermediateTechnique: 'Blue Orchid utilizes space within the time signiture to create really fun to play heavy riffs.',
          intermediateUrl: 'https://www.youtube.com/watch?v=YuWfCmbo0Hk'
        }]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE intermediate_id_seq RESTART WITH 6;');
    });
};
