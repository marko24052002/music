const Music = require('../models/music');

// Sample songs data - 40 songs for each category
const sampleSongs = {
  unstoppable: [
    { title: "Unstoppable", artist: "Sia" },
    { title: "Stronger", artist: "Kanye West" },
    { title: "Eye of the Tiger", artist: "Survivor" },
    { title: "Roar", artist: "Katy Perry" },
    { title: "Fight Song", artist: "Rachel Platten" },
    { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis" },
    { title: "Hall of Fame", artist: "The Script" },
    { title: "Titanium", artist: "David Guetta ft. Sia" },
    { title: "Whatever It Takes", artist: "Imagine Dragons" },
    { title: "The Greatest", artist: "Sia" },
    { title: "Born to Run", artist: "Bruce Springsteen" },
    { title: "Lose Yourself", artist: "Eminem" },
    { title: "We Will Rock You", artist: "Queen" },
    { title: "Thunder", artist: "Imagine Dragons" },
    { title: "Believer", artist: "Imagine Dragons" },
    { title: "Stronger (What Doesn't Kill You)", artist: "Kelly Clarkson" },
    { title: "Don't Stop Believin'", artist: "Journey" },
    { title: "We Are the Champions", artist: "Queen" },
    { title: "Survivor", artist: "Destiny's Child" },
    { title: "Firework", artist: "Katy Perry" },
    { title: "Brave", artist: "Sara Bareilles" },
    { title: "Shake It Off", artist: "Taylor Swift" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
    { title: "Happy", artist: "Pharrell Williams" },
    { title: "Walking on Sunshine", artist: "Katrina and The Waves" },
    { title: "I Gotta Feeling", artist: "The Black Eyed Peas" },
    { title: "Dynamite", artist: "Taio Cruz" },
    { title: "On Top of the World", artist: "Imagine Dragons" },
    { title: "Good Feeling", artist: "Flo Rida" },
    { title: "The Power", artist: "Snap!" },
    { title: "Gonna Fly Now", artist: "Bill Conti" },
    { title: "You're the Best", artist: "Joe Esposito" },
    { title: "Win", artist: "Jay Rock" },
    { title: "All I Do Is Win", artist: "DJ Khaled" },
    { title: "Victory", artist: "Puff Daddy" },
    { title: "Champion", artist: "Kanye West" },
    { title: "We Made It", artist: "Busta Rhymes" },
    { title: "I Believe I Can Fly", artist: "R. Kelly" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye" },
    { title: "I Will Survive", artist: "Gloria Gaynor" }
  ],
  help: [
    { title: "Help!", artist: "The Beatles" },
    { title: "Lean On Me", artist: "Bill Withers" },
    { title: "Bridge Over Troubled Water", artist: "Simon & Garfunkel" },
    { title: "You've Got a Friend", artist: "James Taylor" },
    { title: "With a Little Help From My Friends", artist: "The Beatles" },
    { title: "Heal the World", artist: "Michael Jackson" },
    { title: "Man in the Mirror", artist: "Michael Jackson" },
    { title: "One Call Away", artist: "Charlie Puth" },
    { title: "Count on Me", artist: "Bruno Mars" },
    { title: "Stand by Me", artist: "Ben E. King" },
    { title: "I'll Be There", artist: "The Jackson 5" },
    { title: "You Are Not Alone", artist: "Michael Jackson" },
    { title: "We Can Work It Out", artist: "The Beatles" },
    { title: "Let It Be", artist: "The Beatles" },
    { title: "Fix You", artist: "Coldplay" },
    { title: "Someone Like You", artist: "Adele" },
    { title: "Hallelujah", artist: "Leonard Cohen" },
    { title: "Tears in Heaven", artist: "Eric Clapton" },
    { title: "Everybody Hurts", artist: "R.E.M." },
    { title: "The Show Must Go On", artist: "Queen" },
    { title: "What a Wonderful World", artist: "Louis Armstrong" },
    { title: "Imagine", artist: "John Lennon" },
    { title: "He Ain't Heavy, He's My Brother", artist: "The Hollies" },
    { title: "You'll Never Walk Alone", artist: "Gerry and the Pacemakers" },
    { title: "That's What Friends Are For", artist: "Dionne Warwick" },
    { title: "I'll Stand by You", artist: "The Pretenders" },
    { title: "You Raise Me Up", artist: "Josh Groban" },
    { title: "Wind Beneath My Wings", artist: "Bette Midler" },
    { title: "Un-break My Heart", artist: "Toni Braxton" },
    { title: "My Heart Will Go On", artist: "Celine Dion" },
    { title: "I Will Always Love You", artist: "Whitney Houston" },
    { title: "Nothing Compares 2 U", artist: "Sinéad O'Connor" },
    { title: "All by Myself", artist: "Eric Carmen" },
    { title: "Alone", artist: "Heart" },
    { title: "Hello", artist: "Adele" },
    { title: "When I Was Your Man", artist: "Bruno Mars" },
    { title: "Say Something", artist: "A Great Big World" },
    { title: "Skinny Love", artist: "Bon Iver" },
    { title: "The A Team", artist: "Ed Sheeran" },
    { title: "Jar of Hearts", artist: "Christina Perri" }
  ],
  "whats-with-the-world": [
    { title: "What's Going On", artist: "Marvin Gaye" },
    { title: "Zombie", artist: "The Cranberries" },
    { title: "American Idiot", artist: "Green Day" },
    { title: "Killing in the Name", artist: "Rage Against the Machine" },
    { title: "Sunday Bloody Sunday", artist: "U2" },
    { title: "War", artist: "Edwin Starr" },
    { title: "We Didn't Start the Fire", artist: "Billy Joel" },
    { title: "Revolution", artist: "The Beatles" },
    { title: "Fortunate Son", artist: "Creedence Clearwater Revival" },
    { title: "Born in the U.S.A.", artist: "Bruce Springsteen" },
    { title: "Give Peace a Chance", artist: "John Lennon" },
    { title: "Blowin' in the Wind", artist: "Bob Dylan" },
    { title: "The Times They Are a-Changin'", artist: "Bob Dylan" },
    { title: "Ohio", artist: "Crosby, Stills, Nash & Young" },
    { title: "For What It's Worth", artist: "Buffalo Springfield" },
    { title: "Masters of War", artist: "Bob Dylan" },
    { title: "A Change Is Gonna Come", artist: "Sam Cooke" },
    { title: "Strange Fruit", artist: "Billie Holiday" },
    { title: "Get Up, Stand Up", artist: "Bob Marley" },
    { title: "Redemption Song", artist: "Bob Marley" },
    { title: "Beds Are Burning", artist: "Midnight Oil" },
    { title: "Sunday Bloody Sunday", artist: "U2" },
    { title: "Pride (In the Name of Love)", artist: "U2" },
    { title: "Where Is the Love?", artist: "The Black Eyed Peas" },
    { title: "American Woman", artist: "The Guess Who" },
    { title: "Eve of Destruction", artist: "Barry McGuire" },
    { title: "I-Feel-Like-I'm-Fixin'-to-Die Rag", artist: "Country Joe and the Fish" },
    { title: "The Unknown Soldier", artist: "The Doors" },
    { title: "2 + 2 = ?", artist: "The Bob Seger System" },
    { title: "The Pill", artist: "Loretta Lynn" },
    { title: "Society", artist: "Eddie Vedder" },
    { title: "Waiting on the World to Change", artist: "John Mayer" },
    { title: "Hands Held High", artist: "Linkin Park" },
    { title: "Mosh", artist: "Eminem" },
    { title: "American Jesus", artist: "Bad Religion" },
    { title: "Bulls on Parade", artist: "Rage Against the Machine" },
    { title: "Sleep Now in the Fire", artist: "Rage Against the Machine" },
    { title: "Know Your Enemy", artist: "Rage Against the Machine" },
    { title: "Guerrilla Radio", artist: "Rage Against the Machine" },
    { title: "Testify", artist: "Rage Against the Machine" }
  ],
  "wonderful-world": [
    { title: "What a Wonderful World", artist: "Louis Armstrong" },
    { title: "Here Comes the Sun", artist: "The Beatles" },
    { title: "Good Vibrations", artist: "The Beach Boys" },
    { title: "Happy", artist: "Pharrell Williams" },
    { title: "Three Little Birds", artist: "Bob Marley" },
    { title: "Beautiful Day", artist: "U2" },
    { title: "Don't Worry Be Happy", artist: "Bobby McFerrin" },
    { title: "Over the Rainbow", artist: "Israel Kamakawiwo'ole" },
    { title: "Walking on Sunshine", artist: "Katrina and The Waves" },
    { title: "Best Day of My Life", artist: "American Authors" },
    { title: "I Can See Clearly Now", artist: "Johnny Nash" },
    { title: "Blue Skies", artist: "Willie Nelson" },
    { title: "Sunshine on My Shoulders", artist: "John Denver" },
    { title: "You Are the Sunshine of My Life", artist: "Stevie Wonder" },
    { title: "Isn't She Lovely", artist: "Stevie Wonder" },
    { title: "My Girl", artist: "The Temptations" },
    { title: "Lovely Day", artist: "Bill Withers" },
    { title: "Beautiful", artist: "Christina Aguilera" },
    { title: "I'm Yours", artist: "Jason Mraz" },
    { title: "Somewhere Over the Rainbow", artist: "Judy Garland" },
    { title: "What a Wonderful World", artist: "Joey Ramone" },
    { title: "The Rainbow Connection", artist: "Kermit the Frog" },
    { title: "Pure Imagination", artist: "Gene Wilder" },
    { title: "A Dream Is a Wish Your Heart Makes", artist: "Disney" },
    { title: "When You Wish Upon a Star", artist: "Disney" },
    { title: "Colors of the Wind", artist: "Disney" },
    { title: "A Whole New World", artist: "Disney" },
    { title: "Can You Feel the Love Tonight", artist: "Elton John" },
    { title: "Circle of Life", artist: "Elton John" },
    { title: "Hakuna Matata", artist: "Disney" },
    { title: "Under the Sea", artist: "Disney" },
    { title: "Bare Necessities", artist: "Disney" },
    { title: "You've Got a Friend in Me", artist: "Randy Newman" },
    { title: "This Is Me", artist: "The Greatest Showman" },
    { title: "A Million Dreams", artist: "The Greatest Showman" },
    { title: "Rewrite the Stars", artist: "The Greatest Showman" },
    { title: "The Climb", artist: "Miley Cyrus" },
    { title: "Firework", artist: "Katy Perry" },
    { title: "Brave", artist: "Sara Bareilles" },
    { title: "Roar", artist: "Katy Perry" }
  ]
};

exports.getCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const validCategories = ['unstoppable', 'help', 'whats-with-the-world', 'wonderful-world'];
    
    if (!validCategories.includes(category)) {
      return res.status(404).render('errors/404');
    }

    // Get songs from database or use sample data
    let songs = await Music.find({ category }).populate('addedBy', 'username');
    
    // If no songs in database, use sample data
    if (songs.length === 0) {
      songs = sampleSongs[category].slice(0, 10).map(song => ({
        ...song,
        addedBy: { username: 'System', _id: 'system' }
      }));
    }

    const categoryTitles = {
      'unstoppable': 'Unstoppable',
      'help': 'Help',
      'whats-with-the-world': "What's With The World",
      'wonderful-world': 'Wonderful World'
    };

    const backgroundImages = {
      'unstoppable': 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
      'help': 'linear-gradient(135deg, #74b9ff, #0984e3)',
      'whats-with-the-world': 'linear-gradient(135deg, #636e72, #2d3436)',
      'wonderful-world': 'linear-gradient(135deg, #00b894, #00a085)'
    };

    res.render('music/category', {
      title: categoryTitles[category],
      category: categoryTitles[category],
      songs,
      background: backgroundImages[category],
      user: req.session.userId ? { 
        username: req.session.username, 
        _id: req.session.userId 
      } : null
    });
  } catch (error) {
    console.error(error);
    res.status(500).render('errors/500');
  }
};

exports.getAddSong = (req, res) => {
  res.render('music/add', {
    title: 'Add Song',
    user: req.session.userId ? { username: req.session.username } : null
  });
};

exports.postAddSong = async (req, res) => {
  try {
    const { title, artist, category, youtubeUrl, spotifyUrl } = req.body;
    
    const newSong = new Music({
      title,
      artist,
      category,
      youtubeUrl,
      spotifyUrl,
      addedBy: req.session.userId
    });

    await newSong.save();
    res.redirect(`/music/${category}`);
  } catch (error) {
    console.error(error);
    res.render('music/add', {
      title: 'Add Song',
      error: 'Failed to add song',
      user: req.session.userId ? { username: req.session.username } : null
    });
  }
};

exports.getEditSong = async (req, res) => {
  try {
    const song = await Music.findById(req.params.id);
    
    if (!song) {
      return res.status(404).render('errors/404');
    }

    // Check if user owns the song
    if (song.addedBy.toString() !== req.session.userId) {
      return res.status(403).render('errors/403');
    }

    res.render('music/edit', {
      title: 'Edit Song',
      song,
      user: req.session.userId ? { username: req.session.username } : null
    });
  } catch (error) {
    console.error(error);
    res.status(500).render('errors/500');
  }
};

exports.postEditSong = async (req, res) => {
  try {
    const { title, artist, category, youtubeUrl, spotifyUrl } = req.body;
    
    const song = await Music.findById(req.params.id);
    
    if (!song) {
      return res.status(404).render('errors/404');
    }

    // Check if user owns the song
    if (song.addedBy.toString() !== req.session.userId) {
      return res.status(403).render('errors/403');
    }

    song.title = title;
    song.artist = artist;
    song.category = category;
    song.youtubeUrl = youtubeUrl;
    song.spotifyUrl = spotifyUrl;

    await song.save();
    res.redirect(`/music/${category}`);
  } catch (error) {
    console.error(error);
    res.render('music/edit', {
      title: 'Edit Song',
      error: 'Failed to update song',
      user: req.session.userId ? { username: req.session.username } : null
    });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const song = await Music.findById(req.params.id);
    
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }

    // Check if user owns the song
    if (song.addedBy.toString() !== req.session.userId) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    await Music.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete song' });
  }
};