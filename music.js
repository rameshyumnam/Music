const musicArrays = [
    {
        title: "Adele - Set fire to the rain",
        singer: "By Adele",
        cover: "artworks-000074265193-a5zcr9-t500x500.jpg",
        src: "Adele - Set fire to the rain (PianoAcoustic Version).mp3"
    },
    {
        title: "8 Letters - Why Don't We",
        singer: "8 letters",
        cover: "Why_Don't_We_-_8_Letters.png",
        src: "8 Letters - Why Don't We [Official Music Video].mp3"
    },
    {
        title: "Bea and her Business - Born To Be Alive",
        singer: "Alive",
        cover: "artworks-btWq7VGOuh01-0-t500x500.jpg",
        src: "Bea and her Business - Born To Be Alive (Lyrics).mp3"
    },
    {
        title: "Christina Perri - A Thousand Years",
        singer: "By Christina Perri",
        cover: "artworks-000045231202-2s55sz-t500x500.jpg",
        src: "Christina Perri - A Thousand Years [Official Music Video].mp3"
    },
    {
        title: "Duncan Laurence - Arcade ft. FLETCHER",
        singer: "By Duncan Laurence",
        cover: "artworks-DeVcFdgeLbbzmoOL-hMzmUw-t500x500.jpg",
        src: "Duncan Laurence - Arcade (Lyric Video) ft. FLETCHER.mp3"
    },
    {
        title: "Egzod & Maestro Chives - Royalty ft. Neoni",
        singer: "By Egzod & Maestro Chives",
        cover: "royalty-1619082030-xBgqGZWLw9.jpg",
        src: "Egzod & Maestro Chives - Royalty (Lyrics) ft. Neoni.mp3"
    },
    {
        title: "in another life, I would be your girl  BRGR lofi remix",
        singer: "by BRGR lofi",
        cover: "maxresdefault.jpg",
        src: "in another life, I would be your girl  BRGR lofi remix.mp3"
    },
    {
        title: "Indila_-_Love_Story_Vistanaij",
        singer: "By Indila",
        cover: "ab67616d0000b2734ae8ff731c49965bf2083405.jpg",
        src: "Indila_-_Love_Story_Vistanaij.com.ng.mp3"
    },
    {
        title: "Keane - Somewhere Only We Know",
        singer: "By Kane",
        cover: "ab67616d0000b2737d6cd95a046a3c0dacbc7d33.jpg",
        src: "Keane - Somewhere Only We Know (Lyrics).mp3"
    },
    {
        title: "Lady Gaga, Bruno Mars - Die With A Smile",
        singer : "By Lady Gaga, Bruno Mars",
        cover: "Lady_Gaga_and_Bruno_Mars_-_Die_with_a_Smile.png",
        src: "Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video).mp3"
    },
    {
        title: "Love In The Dark",
        singer: "By Adele",
        cover: "artworks-M6hknzGfyXcaKkLt-DmfHkA-t1080x1080.jpg",
        src: "Love In The Dark.mp3"
    },
    {
        title: "Party Legends",
        singer: "By Mobile Legends",
        cover: "ab67616d0000b2732b47de0d1e857a7fd7153688.jpg",
        src: "Party Legends.mp3"
    },
    {
        title: "River Flows In YouSmooth & Relaxing  (Violin,Cello&Piano ver.)",
        singer: "By Violin",
        cover: "artworks-UzgyeAWtOCgZK1Sd-hfua2w-t500x500.jpg",
        src: "River Flows In YouSmooth & Relaxing  (Violin,Cello&Piano ver.).mp3"
    },
    {
        title: "Until I Found You  Stephen Sanchez  slowed  reverb (piano version)",
        singer: "By Stephan Sanchez",
        cover: "bb67616d0000b273b2c4ddfc4d23c45ab16e57b9.jpg",
        src: "Until I Found You  Stephen Sanchez  slowed  reverb (piano version).mp3"
    },
    {
        title: "AKON- LONELY ( VERSÃO REMIX ) DJ LUCAS BEAT",
        singer: "Akon",
        cover: "lonley.jpg",
        src: "AKON- LONELY ( VERSÃO REMIX ) DJ LUCAS BEAT [u91Ef7PGpC4].mp3"
    },
    {
        title: "Alone With You (HEDEGAARD x Conor Maynard Feat. Katie Pearlman)",
        singer: "Conor Maynard",
        cover: "alone with you.jpg",
        src: "Alone With You (HEDEGAARD x Conor Maynard Feat. Katie Pearlman) [vRNZDySmmno].mp3"
    },
    {
        title: "Amaarae - SAD GIRLZ LUV MONEY Remix ft Kali Uchis",
        singer: "Amaarae",
        cover: "sad girlz.jpg",
        src: "Amaarae - SAD GIRLZ LUV MONEY Remix ft Kali Uchis (Lyric Video) [9ni1BbREPHs].mp3"
    },
    {
        title: "Bobby Bass - Hoist the Colours (Lyrics) The Bass Singers of TikTok",
        singer: "Bobby Bass",
        cover: "hoist the colors.jpg",
        src: "Bobby Bass - Hoist the Colours (Lyrics) The Bass Singers of TikTok [-7LnKnDg8TI].mp3"
    },
    {
        title: "Easy On Me - Adele (Cover by Alexander Stewart)",
        singer: "Alexander Stewart",
        cover: "easy on me.webp",
        src: "Easy On Me - Adele (Cover by Alexander Stewart) [yEfSY_sGR74].mp3"
    },
    {
        title: "Ed Sheeran - Shape of You",
        singer: "Ed Sheeran",
        cover: "shape of you.jpg",
        src: "Ed Sheeran - Shape of You (Lyrics) [liTfD88dbCo].mp3"
    },
    {
        title: "etu - au domoni iko",
        singer: "Etu",
        cover: "au domini.jpg",
        src: "etu - au domoni iko (Audio) [xbJLS7QvUr8].mp3"
    },
    {
        title: "Evan Rachel Wood - All Is Found",
        singer: "Evan Rachel Wood",
        cover: "all is found.jpg",
        src: "Evan Rachel Wood - All Is Found (From _Frozen 2__Lyric Video) [a1HL26K1nL0].mp3"
    },
    {
        title: "Faouzia & John Legend - Minefields",
        singer: "Faouzia & John Legend",
        cover: "minefields.jpg",
        src: "Faouzia & John Legend - Minefields (Official Music Video) [jKIEUdAMtrQ].mp3"
    },
    {
        title: "Gotye - Somebody That I Used To Know",
        singer: "Goyte",
        cover: "somebody that i used to know.jpg",
        src: "Gotye - Somebody That I Used To Know (ft. Kimbra) [M7v0lIHfiUM].mp3"
    },
    {
        title: "Hozier - Take Me To Church",
        singer: "Hozier",
        cover: "take me to church.jpg",
        src: "Hozier - Take Me To Church (Lyrics) [SND2LY0s8FE].mp3"
    },
    {
        title: "I Like You So Much, You'll Know It - Ysabelle Cuevas",
        singer: "Ysabelle Cuevas",
        cover: "i like u so much.jpg",
        src: "I Like You So Much, You'll Know It - Ysabelle Cuevas (Lyrics) [fZkoV5dIKmM].mp3"
    },
    {
        title: "Jodi Benson - Part of Your World",
        singer: "Jodi Benson",
        cover: "part of your world.jpg",
        src: "Jodi Benson - Part of Your World - Lyrics (The Little Mermaid) [XE0sKZmtyqA].mp3"
    },
    {
        title: "John Legend - All of Me",
        singer: "John Legend",
        cover: "all of me.jpg",
        src: "John Legend - All of Me (Lyrics) [ngq5Aw0Q6rQ].mp3"
    },
    {
        title: "Just The Way You Are - Bruno Mars (Boyce Avenue acoustic_piano cover)",
        singer: "Boyce Avenue",
        cover: "just the way.jpg",
        src: "Just The Way You Are - Bruno Mars (Boyce Avenue acoustic_piano cover) on Spotify & Apple [GhFSgnvKqm4].mp3"
    },
    {
        title: "Leigh-Anne - My Love (feat. Ayra Starr)",
        singer: "Leigh Anne",
        cover: "my love.jpg",
        src: "Leigh-Anne - My Love (feat. Ayra Starr) _ Lyrics [efYOa7rwmjE].mp3"
    },
    {
        title: "LEIHOUROKO __ DIPU KHUNUNG __ OFFICIAL MUSIC VIDEO",
        singer: "Dipu Khunung",
        cover: "leihouroko.jpg",
        src: "LEIHOUROKO __ DIPU KHUNUNG __ OFFICIAL MUSIC VIDEO [4iRb6AaC4gk].mp3"
    },
    {
        title: "Loreen - Tattoo",
        singer: "Loreen",
        cover: "tattoo.jpg",
        src: "Loreen - Tattoo [_IqI2bf9CCQ].mp3"
    },
    {
        title: "Lyrics Conor Maynard SING OFF vs Pixie Lott",
        singer: "Conor Maynard",
        cover: "despasito.jpg",
        src: "Lyrics Conor Maynard SING OFF vs Pixie Lott [Xs_GrModFco].mp3"
    },
    {
        title: "Pretty's On The Inside - Chloe Adams",
        singer: "Chloe Adams",
        cover: "preety on the inside.jpg",
        src: "Pretty's On The Inside - Chloe Adams (Lyrics) [vYAQiIAZlSs].mp3"
    },
    {
        title: "PUBG - Siren Jam (Full Song) 2020",
        singer: "Siren Jam",
        cover: "pubg.jpg",
        src: "PUBG - Siren Jam (Full Song) 2020 [1mP4Qo5mRSs].mp3"
    },
    {
        title: "Rolling In The Deep - Adele",
        singer: "Adele",
        cover: "rolling.jpg",
        src: "Rolling In The Deep - Adele (Lyrics) 🎵 [AIYpdjQVidc].mp3"
    },
    {
        title: "Sam Smith - Fire On Fire (From _Watership Down_)",
        singer: "Sam Smith",
        cover: "fire on fire.jpg",
        src: "Sam Smith - Fire On Fire (From _Watership Down_) [vk_xq1P7vIU].mp3"
    },
    {
        title: "Sam Smith - Unholy ft. Kim Petras (ALTÉGO REMIX)",
        singer: "Sam Smith",
        cover: "unholy.jpg",
        src: "Sam Smith - Unholy ft. Kim Petras (ALTÉGO REMIX) [I69gtH817iw].mp3"
    },
    {
        title: "sapientdream - Pastlives (lyrics)",
        singer: "Sapientdream",
        cover: "pastlive.jpg",
        src: "sapientdream - Pastlives (lyrics) [-TXtyYZIiWc].mp3"
    },
    {
        title: "SLANDER - Love is Gone (Lyrics) ft. Dylan Matthew (Acoustic) _I'm sorry don't leave me",
        singer: "Dylan Matthew",
        cover: "love is gone.jpg",
        src: "SLANDER - Love is Gone (Lyrics) ft. Dylan Matthew (Acoustic) _I'm sorry don't leave me_ [mv23MnaNvGM].mp3"
    },
    {
        title: "Tate McRae - you broke me first",
        singer: "Conor Maynard",
        cover: "broke me.jpg",
        src: "Tate McRae - you broke me first [YwgNpObouB0].mp3"
    },
    {
        title: "The nights-girl version cover by~Angie♡",
        singer: "Angie",
        cover: "the night.jpg",
        src: "The nights-girl version cover by~Angie♡ [y4VZ2B3dDds].mp3"
    },
    {
        title: "Titanic _ My Heart Will Go On _ Heart Touching Flute Cover _ Swarnim Maharjan",
        singer: "Swarnim Maharjan",
        cover: "titanic.jpg",
        src: "Titanic _ My Heart Will Go On _ Heart Touching Flute Cover _ Swarnim Maharjan [K69ix4ehy70].mp3"
    },
    {
        title: "Westlife - You Raise Me Up",
        singer: "Westlife",
        cover: "raise up.jpg",
        src: "Westlife - You Raise Me Up (Official Video) [9bxc9hbwkkw].mp3"
    },
    {
        title: "Alan Walker, K-391, Tungevaag, Mangoo - PLAY",
        singer: "Alan Walker",
        cover: "play.jpg",
        src: "Alan Walker, K-391, Tungevaag, Mangoo - PLAY (Lyrics).mp3"
    },
    {
        title: "ALLSTAR 2024 Night of Rhythm Cinematic Music Video  MLBB SPARKLE  Mobile Legends_ Bang Bang",
        singer: "Night of Rhythm",
        cover: "night of rhythm.jpg",
        src: "ALLSTAR 2024 Night of Rhythm Cinematic Music Video  MLBB SPARKLE  Mobile Legends_ Bang Bang [4K].mp3"
    },
    {
        title: "Billie Eilish - lovely",
        singer: "Billie Eilish",
        cover: "lovely.jpeg",
        src: "Billie Eilish - lovely (Lyrics) ft. Khalid.mp3"
    },
    {
        title: "Calum Scott - You Are The Reason",
        singer: "Calum Scott",
        cover: "you are the reason.jpg",
        src: "Calum Scott - You Are The Reason (Official Video).mp3"
    },
    {
        title: "Celine Dion - My Heart Will Go On",
        singer: "Celine Dion",
        cover: "my heart will go on.jpg",
        src: "Celine Dion - My Heart Will Go On (Lyrics).mp3"
    },
    {
        title: "Céline Dion - To Love You More",
        singer: "Celine Dion",
        cover: "to love you more.jpg",
        src: "Céline Dion - To Love You More (Official Audio).mp3"
    },
    {
        title: "Ckay-Love Nwantiti - Dj Yo! Ft AX'EL",
        singer: "Ckay",
        cover: "love nawantiti.jpg",
        src: "Ckay-Love Nwantiti - Dj Yo! Ft AX'EL (Joeboy, Kuami Eugene).mp3"
    },
    {
        title: "Don Omar - Danza Kuduro",
        singer: "Danza Kuduro",
        cover: "don omar.jpg",
        src: "Don Omar - Danza Kuduro [REMIX]  CAR VIDEO.mp3"
    },
    {
        title: "Hymns Medley  Amazing Grace  Be Thou My Vision  Come Thou Fount  Anthem Lights",
        singer: "Anthem Lights",
        cover: "amazing grace.jpg",
        src: "Hymns Medley  Amazing Grace  Be Thou My Vision  Come Thou Fount  Anthem Lights.mp3"
    },
    {
        title: "It Is Well With My Soul  Anthem Lights",
        singer: "Anthem Lights",
        cover: "it is well with my soul.jpg",
        src: "It Is Well With My Soul  Anthem Lights.mp3"
    },
    {
        title: "K-391 & Alan Walker - Ignite",
        singer: "K-391 & Alan Walker",
        cover: "ignite.jpg",
        src: "K-391 & Alan Walker - Ignite (feat. Julie Bergan & Seungri).mp3"
    },
    {
        title: "Katy Perry - Unconditionally",
        singer: "Katy Perry",
        cover: "unconditionally.jpg",
        src: "Katy Perry - Unconditionally (Official).mp3"
    },
    {
        title: "Lewis Capaldi - Someone You Loved",
        singer: "Lewis Capaldi",
        cover: "someone you loved.jpg",
        src: "Lewis Capaldi - Someone You Loved (Lyrics).mp3"
    },
    {
        title: "Major Lazer - Cold Water (feat. Justin Bieber & MØ)",
        singer: "Major Lazer",
        cover: "cold water.jpg",
        src: "Major Lazer - Cold Water (feat. Justin Bieber & MØ) (Official Dance Video).mp3"
    },
    {
        title: "Mirrors - Justin Timberlake (Nirit Milis acoustic cover)",
        singer: "Nirit Milis",
        cover: "mirrors.jpg",
        src: "Mirrors - Justin Timberlake (Nirit Milis acoustic cover).mp3"
    },
    {
        title: "Nightcore  Havana  Shape of You   Despacito & MORE!",
        singer: "Nightcore",
        cover: "havana.jpg",
        src: "Nightcore  Havana  Shape of You   Despacito & MORE! (Switching VocalsMashup) - [Lyrics].mp3"
    },
    {
        title: "Nightcore - Demons (Switching Vocals)",
        singer: "Nightcore",
        cover: "demons.jpg",
        src: "Nightcore - Demons (Switching Vocals) - (Lyrics).mp3"
    },
    {
        title: "One Direction - Night Changes",
        singer: "One Direction",
        cover: "night change.jpg",
        src: "One Direction - Night Changes.mp3"
    },
    {
        title: "Phil Collins - You'll Be in My Heart Tarzan",
        singer: "Phil Collins",
        cover: "tarzan.jpg",
        src: "Phil Collins - You'll Be in My Heart Tarzan(ターザン).mp3"
    },
    {
        title: "Pink Sweat$ - At My Worst",
        singer: "Pink Sweats",
        cover: "at my worst.jpg",
        src: "Pink Sweat$ - At My Worst (Lyrics).mp3"
    },
    {
        title: "Pitbull - Timber",
        singer: "Pitbull",
        cover: "timber.jpg",
        src: "Pitbull - Timber (Lyrics) ft. Ke$ha.mp3"
    },
    {
        title: "Sia - (Lyrics) Cheap Thrills",
        singer: "Sia",
        cover: "cheap thrill.jpg",
        src: "Sia - (Lyrics) Cheap Thrills (Single Version).mp3"
    },
    {
        title: "Song of the Sea  Lullaby",
        singer: "Lullaby",
        cover: "song of the sea.jpg",
        src: "Song of the Sea  Lullaby [with lyrics].mp3"
    },
    {
        title: "Taylor Swift - Love Story",
        singer: "Taylor Swift",
        cover: "love story.jpg",
        src: "Taylor Swift - Love Story (Lyrics).mp3"
    },
    {
        title: "Thaa Thaa  Thabungton  Official Music Video Release",
        singer: "Manipuri",
        cover: "tha tha thabungton.jpg",
        src: "Thaa Thaa  Thabungton  Official Music Video Release.mp3"
    },
    {
        title: "The Chainsmokers & Coldplay - Something Just Like This",
        singer: "Chainsmokers & Coldplay",
        cover: "something just like this.jpg",
        src: "The Chainsmokers & Coldplay - Something Just Like This (Lyric).mp3"
    },
    {
        title: "The Little Mermaid Medley  Anthem Lights Mashup",
        singer: "Anthem Lights",
        cover: "part of world.jpg",
        src: "The Little Mermaid Medley  Anthem Lights Mashup.mp3"
    },
    {
        title: "TheFatRat - Monody (feat. Laura Brehm) (Orchestral Remix by sJLs)",
        singer: "TheFatRat",
        cover: "monody.jpg",
        src: "TheFatRat - Monody (feat. Laura Brehm) (Orchestral Remix by sJLs) (Lyrics Video).mp3"
    },
    {
        title: "Westlife -  Beautiful in white",
        singer: "Westlife",
        cover: "beatiful in whit.jpg",
        src: "Westlife -  Beautiful in white (Lyrics).mp3"
    },
    {
        title: "Whitney Houston - I Will Always Love You",
        singer: "Whitney Houston",
        cover: "i will always love you.jpg",
        src: "Whitney Houston - I Will Always Love You (Lyrics).mp3"
    },
    {
        title: "ZAYN - iTs YoU",
        singer: "Zayn",
        cover: "its you.jpg",
        src: "ZAYN - iTs YoU (Lyrics).mp3"
    },
];

const musicList = document.getElementById("music-list");

musicArrays.forEach(music => {
    const song = document.createElement("div");
    song.className = "song-container";
    song.innerHTML = `
        <img id="thumbnail" src="${music.cover}" alt="">
        <div>
            <h3 class="title">${music.title}</h3>
            <p class="singer">${music.singer}</p>
            <audio class="audio" src="${music.src}" controls></audio>
        </div>
    `;
    musicList.appendChild(song);
});

setTimeout(() => {
    const allAudio = document.querySelectorAll("audio");

    allAudio.forEach((audio, index) => {
        // Stop other audios when one plays
        audio.onplay = () => {
            allAudio.forEach(other => {
                if (other !== audio) {
                    other.pause();
                    other.currentTime = 0;
                    other.style.border = "none"
                } else {
                    audio.style.border = "2px solid #30ff30";
                } 
            });
        };

        // Play next audio automatically
        audio.onended = () => {
            const next = allAudio[index + 1];
            if (next) {
                next.play();
            } else {
                // If it's the last song, go back to first
                allAudio[0].play();
            }
        };
    });
}, 0);