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