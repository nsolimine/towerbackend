
exports.seed = function(knex, Promise) {
  return knex('advanced').del()
    .then(() => {
      return knex('advanced').insert([{
          advancedId: 1,
          advancedDifficulty: 'Advanced',
          advancedArtist: 'Radiohead',
          advancedSong: 'Paranoid Android',
          advancedTechnique: 'Paranoid Android requires very specific picking patterns, string skipping, and very angular lead melodies.',
          advancedUrl: 'https://www.youtube.com/watch?v=QmCJ3TW2hqA'
        },{
          advancedId: 2,
          advancedDifficulty: 'Advanced',
          advancedArtist: 'Dire Straits',
          advancedSong: 'Sultans of Swing',
          advancedTechnique: 'Sultans of Swing incorporates cajun-style finger strumming patterns, string muting, and an iconic final solo using pull-offs.',
          advancedUrl: 'https://www.youtube.com/watch?v=YyF1FwiYcoQ'
        },{
          advancedId: 3,
          advancedDifficulty: 'Advanced',
          advancedArtist: 'Joe Satriani',
          advancedSong: 'Always With You, Always With Me',
          advancedTechnique: 'Always With You, Always With Me uses a plethora of techniques including tapping, key changes, double stops, and lightning fast phrases.',
          advancedUrl: 'https://www.youtube.com/watch?v=SpMCGXWzCS0'
        },{
          advancedId: 4,
          advancedDifficulty: 'Advanced',
          advancedArtist: 'Stevie Ray Vaughan and Double Trouble',
          advancedSong: 'Texas Flood',
          advancedTechnique: 'Texas Flood is iconic in its use of the blues scale, string bending accuracy, and vibrato.',
          advancedUrl: 'https://www.youtube.com/watch?v=wVjdMLAMbM0'
        },{
          advancedId: 5,
          advancedDifficulty: 'Advanced',
          advancedArtist: 'John Mayer',
          advancedSong: 'Edge of Desire',
          advancedTechnique: 'Edge of Desire is based around a beautiful and intricate chord progression where each chord tone is individually picked.',
          advancedUrl: 'https://www.youtube.com/watch?v=5GTbM5-ku-M'
        }]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE advanced_id_seq RESTART WITH 6;');
    });
};