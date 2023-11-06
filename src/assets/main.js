const API = 'https://youtube-v38.p.rapidapi.com/channel/videos/?id=UCPH3Oz99Y_jrVBCQMjQZNSg&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f90e3fb7b2msh1e0cfd3590aef71p1b8a18jsna7a59b63f845',
		'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
  }
  
  (async () => {
    try {
      const videos = await fetchData(API);
      let view = `
      ${videos.contents.map(e => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${e.video.thumbnails[3].url}" alt="${e.video.title}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${e.video.title}
            </h3>
          </div>
        </div>
      `).slice(0,4).join('')}
  
      `;
    content.innerHTML = view;
    } catch (error){
        console.log(error)
    }
  })();


// EJEMPLO DEL PROFE

// const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

// const content = null || document.getElementById('content');

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
//   }
// };

// async function fetchData(urlApi) {
//   const response = await fetch(urlApi, options);
//   const data = await response.json();
//   return data;
// }

// (async () => {
//   try {
//     const videos = await fetchData(API);
//     let view = `
//     ${videos.items.map(video => `
//       <div class="group relative">
//         <div
//           class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//           <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
//         </div>
//         <div class="mt-4 flex justify-between">
//           <h3 class="text-sm text-gray-700">
//             <span aria-hidden="true" class="absolute inset-0"></span>
//             ${video.snippet.title}
//           </h3>
//         </div>
//       </div>
//     `).slice(0, 4).join('')}
//     `;
//     content.innerHTML = view;
//   } catch (error) {
//     console.log(error);
//   }
// })();