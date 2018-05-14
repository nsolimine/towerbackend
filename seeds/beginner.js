exports.seed = function(knex, Promise) {
  return knex('beginner').del()
    .then(() => {
      return knex('beginner').insert([{
          id: 1,
          difficulty: 'Beginner',
          artist: 'The White Stripes',
          song: 'Seven Nation Army',
          technique: 'Seven Nation Army is a perfect beginners song to start learning your way around the fretboard and getting accustomed to the sounds that you can create.',
          url: 'https://www.youtube.com/embed/0J2QdDbelmY',
          tabUrl: 'https://www.songsterr.com/a/wsa/white-stripes-seven-nation-army-tab-s265t1'
        },{
          id: 2,
          difficulty: 'Beginner',
          artist: 'Nirvana',
          song: 'Smells Like Teen Spirit',
          technique: 'Smells Like Teen Spirit is an iconic use of power chords to stretch your fingers and begin to develop strumming patterns.',
          url: 'https://www.youtube.com/embed/hTWKbfoikeg',
          tabUrl: 'https://www.songsterr.com/a/wsa/nirvana-smells-like-teen-spirit-tab-s269t2'
        },{
          id: 3,
          difficulty: 'Beginner',
          artist: 'The Red Hot Chili Peppers',
          song: 'Otherside',
          technique: 'Otherside is a great jumping off point to start learning altrenate picking and string skipping.',
          url: 'https://www.youtube.com/embed/rn_YodiJO6k',
          tabUrl: 'https://www.songsterr.com/a/wsa/red-hot-chili-peppers-otherside-tab-s23785t2'
        },{
          id: 4,
          difficulty: 'Beginner',
          artist: 'Marshall Tucker Band',
          song: 'Cant You See',
          technique: 'Cant You See is a three chord song using the basic positions for Dmaj, Cmaj, and Gmaj.  It can help you to develop more advanced strumming patterns.',
          url: 'https://www.youtube.com/embed/-48Za7VZR_c',
          tabUrl: 'https://www.songsterr.com/a/wsa/marshall-tucker-band-can-t-you-see-tab-s42755t2'
        },{
          id: 5,
          difficulty: 'Beginner',
          artist: 'Creedence Clearwater Revival',
          song: 'Bad Moon Rising',
          technique: 'Bad Moon Rising is a timeless rock tune that uses steady, basic strumming.  It is a great song to start learning chord switching and playing in time.',
          url: 'https://www.youtube.com/embed/5BmEGm-mraE',
          tabUrl: 'https://www.songsterr.com/a/wsa/creedence-clearwater-revival-bad-moon-rising-tab-s4232t4'
        }]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE beginner_id_seq RESTART WITH 6;');
    });
};
