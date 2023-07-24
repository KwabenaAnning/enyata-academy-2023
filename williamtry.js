import axios from "axios";


async function getdata (){
    let data = await axios.get("https://api.github.com/users/KwabenaAnning")

console.log(data);

};
getdata()

