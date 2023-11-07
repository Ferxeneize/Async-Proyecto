async function runCode(url) {
    const options = {
      method: 'GET'
    }
    try {
      const correctUrl = new URL(url);
      const response = await fetch(correctUrl, options);
      const data = await response.json();
      return console.log(data) 
    }
    catch (error){
      if (error.message.includes('URL')) {
        throw new Error('Invalid URLaassa');
      }
      else {
        throw new Error('Something was wrong');
      }
    }
  }

//  runCode('ssdsdd')
runCode('https://api.escuelajs.co/api/v1/categories')
 // runCode('https://castillomorales.com.ar')


 // Otra opcion 
 async function runCode(url) {
    const options = {
      method: 'GET'
    }

    try {
        new URL(url);
    }catch{
        throw new Error('Invalid URLLLLLLL');
    }

    try {  
      const response = await fetch(url, options);
      const data = await response.json();
      return console.log(data) 
    } catch{
        throw new Error('Something was wrong');
      }
  }
// runCode('ssdsdd')
// runCode('https://api.escuelajs.co/api/v1/categories')
 runCode('https://castillomorales.com.ar')
