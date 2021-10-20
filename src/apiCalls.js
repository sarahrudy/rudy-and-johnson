export const getAllMovies = () => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
    .then(response => response.json())
}

export const getSingleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
}

export const checkError = (response) => {
  if (!response.ok) {
    throw new Error(
      "Sorry...Internet Server Error"
    )
  } else {
    return response.json()
  }
}