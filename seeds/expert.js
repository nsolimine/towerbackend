exports.seed = function(knex, Promise) {
  return knex('expert').del()
    .then(() => {
      return knex('expert').insert([{
          id: 1,
          difficulty: 'Expert',
          artist: 'Jason Becker',
          song: 'Perpetual Burn',
          technique: 'Perpetual Burn is a powerhouse of neo-classical shred guitar playing.  It incorporates arpeggios, sweep picking, and string skipping.',
          url: 'https://www.youtube.com/embed/5qCQLyb0-mI',
          tabUrl: 'https://www.songsterr.com/a/wsa/jason-becker-perpetual-burn-tab-s2897t0'
        },{
          id: 2,
          difficulty: 'Expert',
          artist: 'Steve Vai',
          song: 'For The Love of God',
          technique: 'For The Love of God is the magnum opus by Steve Vai. Complex melodies, arpeggios and blinding speed are all needed to play this song.',
          url: 'https://www.youtube.com/embed/okLDkcexiVg',
          tabUrl: 'https://www.songsterr.com/a/wsa/steve-vai-for-the-love-of-god-tab-s608t0'
        },{
          id: 3,
          difficulty: 'Expert',
          artist: 'Guthrie Govan',
          song: 'Waves',
          technique: 'Waves is a complex tune that utilizes multi-finger tapping, legato, and long slides to play the intricate theme of the song.',
          url: 'https://www.youtube.com/embed/U75g2mDTXtA',
          tabUrl: 'https://www.songsterr.com/a/wsa/guthrie-govan-waves-tab-s37052t1'
        },{
          id: 4,
          difficulty: 'Expert',
          artist: 'Racer X',
          song: 'Technical Difficulties',
          technique: 'Technical Difficulties is Paul Gilberts speed frenzy with one of the fastest altrenate picking and legato riffs of all time.',
          url: 'https://www.youtube.com/embed/SkoPfV5tjWo',
          tabUrl: 'https://www.songsterr.com/a/wsa/racer-x-technical-difficulties-tab-s16227t0'
        },{
          id: 5,
          difficulty: 'Expert',
          artist: 'Al di Meola',
          song: 'Mediterranean Sundance',
          technique: 'Mediterranean Sundance is an unforgivingly difficult song that requires insane speed on an acoustic guitar and flamenco style strumming.',
          url: 'https://www.youtube.com/embed/hhccIfevjCU',
          tabUrl: 'https://www.songsterr.com/a/wsa/al-di-meola-mediterranean-sundance-tab-s30926t0'
        }]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE expert_id_seq RESTART WITH 6;');
    });
};
