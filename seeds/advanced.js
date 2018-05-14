exports.seed = function(knex, Promise) {
  return knex('advanced').del()
    .then(() => {
      return knex('advanced').insert([{
          id: 1,
          difficulty: 'Advanced',
          artist: 'Radiohead',
          song: 'Paranoid Android',
          technique: 'Paranoid Android requires very specific picking patterns, string skipping, and very angular lead melodies.',
          url: 'https://www.youtube.com/embed/QmCJ3TW2hqA',
          tabUrl: 'https://www.songsterr.com/a/wsa/radiohead-paranoid-android-tab-s16501t1'
        },{
          id: 2,
          difficulty: 'Advanced',
          artist: 'Dire Straits',
          song: 'Sultans of Swing',
          technique: 'Sultans of Swing incorporates cajun-style finger strumming patterns, string muting, and an iconic final solo using pull-offs.',
          url: 'https://www.youtube.com/embed/YyF1FwiYcoQ',
          tabUrl: 'https://www.songsterr.com/a/wsa/dire-straits-sultans-of-swing-tab-s30084t1'
        },{
          id: 3,
          difficulty: 'Advanced',
          artist: 'Joe Satriani',
          song: 'Always With You, Always With Me',
          technique: 'Always With You, Always With Me uses a plethora of techniques including tapping, key changes, double stops, and lightning fast phrases.',
          url: 'https://www.youtube.com/embed/SpMCGXWzCS0',
          tabUrl: 'https://www.songsterr.com/a/wsa/joe-satriani-always-with-me-always-with-you-tab-s22967t2'
        },{
          id: 4,
          difficulty: 'Advanced',
          artist: 'Stevie Ray Vaughan and Double Trouble',
          song: 'Texas Flood',
          technique: 'Texas Flood is iconic in its use of the blues scale, string bending accuracy, and vibrato.',
          url: 'https://www.youtube.com/embed/wVjdMLAMbM0',
          tabUrl: 'https://www.songsterr.com/a/wsa/stevie-ray-vaughan-texas-flood-tab-s8709t1'
        },{
          id: 5,
          difficulty: 'Advanced',
          artist: 'John Mayer',
          song: 'Edge of Desire',
          technique: 'Edge of Desire is based around a beautiful and intricate chord progression where each chord tone is individually picked.',
          url: 'https://www.youtube.com/embed/5GTbM5-ku-M',
          tabUrl: 'https://www.songsterr.com/a/wsa/john-mayer-edge-of-desire-tab-s60295t1'
        }]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE advanced_id_seq RESTART WITH 6;');
    });
};
