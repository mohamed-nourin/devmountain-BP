const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.querySelector('#fortuneButton');
const baseUrl = `http://localhost:4444`;
//bring in the display section element
const displaySection = document.querySelector("#display-section");
//grab html elements we wanna work with
const name = document.getElementById("name");
const favoriteSong = document.getElementById("favoriteSong");
const hobbies = document.getElementById("hobbies");
const updateForm = document.getElementById("updateForm");
const memberID = document.querySelector("member-id");
const updateFullName = document.querySelector("#update-fullname");
const updateSong = document.querySelector("#update-song");

const deleteSong = (id) => {
    axios
        .delete(`${baseUrl}/api/song/${id}`)
        .then((res) => createSongCard(res.data))
        .catch((err) => console.error(err));
};

//creates the card for songs/response
createSongCard = (songArr) => {
    displaySection.innerHTML = ``;
    songArr.map((song) => {
        const holdingDiv = document.createElement("div");
        holdingDiv.innerHTML = `
            <ul>
            <li>Id: ${song.songId}</li>
                <li>Song: ${song.songName}</li>
                <li>Artist: ${song.artist}</li>
                <button onclick="deleteSong(${song.songId})"> Delete </button>
            </ul>
        `;
        displaySection.appendChild(holdingDiv);
    });
};


//gets all songs
const getSongs = () => {
    axios
        .get(`${baseUrl}/api/song`)
        .then((res) => {
            console.log(res.data);
            createSongCard(res.data);
        })
        .catch((err) => console.error(err));
};

//adds new song to db
const addFormHandler = (e) => {
    e.preventDefault();
    const body = {
        songName: newSong.value,
        artist: newArtist.value,
    };
    axios
        .post(`${baseUrl}/api/song`, body)
        .then((res) => createSongCard(res.data))
        .catch((err) => console.error(err));
    newSong.value = ``;
    newArtist.value = ``;
};

const updateHandler = (e) => {
    e.preventDefault();
    // console.log(songId,newArtist,newSong)
    axios
        .put(
            `${baseUrl}/api/song/${songId.value}?newArtist=${updateArtist.value}&newSongName=${updateSong.value}`
        )
        .then((res) => createSongCard(res.data))
        .catch((err) => console.error(err));
};




//up to here
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch(err => console.log(err));
};






complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
document.addEventListener("DOMContentLoaded", getSongs);
addForm.addEventListener("submit", addFormHandler);
updateForm.addEventListener("submit", updateHandler);



