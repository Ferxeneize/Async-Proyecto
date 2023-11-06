const url = 'https://youtube-v38.p.rapidapi.com/channel/videos/?id=UCPH3Oz99Y_jrVBCQMjQZNSg&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f90e3fb7b2msh1e0cfd3590aef71p1b8a18jsna7a59b63f845',
		'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
	}
};

(async function fn (){
    const response = await fetch(url, options);
	const result = await response.json();
    try {
        for (let e = 0; e < 4 ; e++) {
            console.log(result.contents[e].video.title)
        }
        // console.log(result.contents[0])
        // console.log(result.contents.map(e => e.video.title));
    } catch (error) {
        console.error(error);
    }
})()