// getGif hace el llamado a la API

export const getGif = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ZGpqRWarUaSS8vl9PImdCXW11kLY4MET`;
  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs;
}