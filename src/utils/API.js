import axios from "axios";

const API = "https://api.imgur.com/3/account/agentfan/";

const PARAMS = {
    headers: {Authorization: "Client-ID 2f1402117361306"}
};

const getAlbumId = ()=> {
    return axios.get(`${API}albums/ids/0`, PARAMS);
}

const getAlbumData = (hash)=> {
    return axios.get(`${API}/album/${hash}`, PARAMS);
}


export {getAlbumId, getAlbumData};