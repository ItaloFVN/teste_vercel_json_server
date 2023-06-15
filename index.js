async function init(){
    var response = await fetch(`https://nutrischedule.vercel.app/database/db.json`)
    const jsonData = await response.json();
    console.log(jsonData);
}

init()