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
        cover: "",
        src: "I Like You So Much, You'll Know It - Ysabelle Cuevas (Lyrics) [fZkoV5dIKmM].mp3"
    },
    {
        title: "Jodi Benson - Part of Your World",
        singer: "Jodi Benson",
        cover: "i like u so much.jpg",
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