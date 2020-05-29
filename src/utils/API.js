import axios from "axios";

const API = "https://api.imgur.com/3";

const PARAMS = {
    headers: {Authorization: "Client-ID 2f1402117361306"}
};

const getAlbumId = ()=> {
    return axios.get(`${API}/account/agentfan/albums/ids/0`, PARAMS);
}

const getAlbumImages = (hash)=> {
    return axios.get(`${API}/album/${hash}/images`, PARAMS);
}


export {getAlbumId, getAlbumImages};