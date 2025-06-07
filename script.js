const musicArrays = [
    {
        title: "Adele - Set fire to the rain",
        singer: "By Adele",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "Adele - Set fire to the rain (PianoAcoustic Version).mp3"
    },
    {
        title: "8 Letters - Why Don't We",
        singer: "8 letters",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "8 Letters - Why Don't We [Official Music Video].mp3"
    },
    {
        title: "Bea and her Business - Born To Be Alive",
        singer: "Alive",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "Bea and her Business - Born To Be Alive (Lyrics).mp3"
    },
    {
        title: "Christina Perri - A Thousand Years",
        singer: "By Christina Perri",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "Christina Perri - A Thousand Years [Official Music Video].mp3"
    },
    {
        title: "Duncan Laurence - Arcade ft. FLETCHER",
        singer: "By Duncan Laurence",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "Duncan Laurence - Arcade (Lyric Video) ft. FLETCHER.mp3"
    },
    {
        title: "Egzod & Maestro Chives - Royalty ft. Neoni",
        singer: "By Egzod & Maestro Chives",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "Egzod & Maestro Chives - Royalty (Lyrics) ft. Neoni.mp3"
    },
    {
        title: "in another life, I would be your girl  BRGR lofi remix",
        singer: "by BRGR lofi",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "in another life, I would be your girl  BRGR lofi remix.mp3"
    },
    {
        title: "Indila_-_Love_Story_Vistanaij",
        singer: "By Indila",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "Indila_-_Love_Story_Vistanaij.com.ng.mp3"
    },
    {
        title: "Keane - Somewhere Only We Know",
        singer: "By Kane",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "Keane - Somewhere Only We Know (Lyrics).mp3"
    },
    {
        title: "Lady Gaga, Bruno Mars - Die With A Smile",
        singer : "By Lady Gaga, Bruno Mars",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video).mp3"
    },
    {
        title: "Love In The Dark",
        singer: "By Adele",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "Love In The Dark.mp3"
    },
    {
        title: "Party Legends",
        singer: "By Mobile Legends",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "Party Legends.mp3"
    },
    {
        title: "River Flows In YouSmooth & Relaxing  (Violin,Cello&Piano ver.)",
        singer: "By Violin",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "River Flows In YouSmooth & Relaxing  (Violin,Cello&Piano ver.).mp3"
    },
    {
        title: "Until I Found You  Stephen Sanchez  slowed  reverb (piano version)",
        singer: "By Stephan Sanchez",
        cover: "abfa33cc04b98f1248b43eb121ef3be3.png",
        src: "Until I Found You  Stephen Sanchez  slowed  reverb (piano version).mp3"
    }
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

// Now setup play and autoplay-next logic
setTimeout(() => {
    const allAudio = document.querySelectorAll("audio");

    allAudio.forEach((audio, index) => {
        // Stop other audios when one plays
        audio.onplay = () => {
            allAudio.forEach(other => {
                if (other !== audio) {
                    other.pause();
                    other.currentTime = 0;
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