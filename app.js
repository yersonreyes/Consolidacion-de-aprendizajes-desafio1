const baseURL = "https://jsonplaceholder.typicode.com/";

async function mostrarAlbunes(url) {
  try {
    const response = await fetch(`${url}photos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error: ", error);
  } finally {
    setTimeout(() => {
      console.log("Informacion Enviada");
    }, 3000);
  }
}

async function mostrarAlbunesId(url, id) {
  try {
    const response = await fetch(`${url}photos/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error: ", error);
  } finally {
    setTimeout(() => {
      console.log("Informacion Enviada");
    }, 3000);
  }
}

mostrarAlbunes(baseURL).then((fotos) => {
  console.log(fotos.slice(0, 20));
});
