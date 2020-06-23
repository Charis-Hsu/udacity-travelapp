
async function getImage(city){

  const pixabayAPIURL = "https://pixabay.com/api/?key=";
  const pixabayAPIkey = process.env.PIXABAYAPIKEY;
  let completeURL = `${pixabayAPIURL}${pixabayAPIkey}&q=${city}&image_type=photo`;

  const res = await fetch(completeURL);

  try {
    const imageLink = await res.json();

    return imageLink.hits[0].webformatURL;
   } catch (error) {
    console.log("getImage error", error);
  }
}

export{getImage}
