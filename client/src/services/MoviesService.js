const baseUrl = 'http://localhost:3000/api/movies/'

export default{
  getFilms(){
    return fetch(baseUrl)
    .then(res => res.json())
  },
  deleteFilm(id){
    return fetch(baseUrl + id, {
      method: 'DELETE'
    })
    .then(res => res.json())
  },
  selectFilm(id){
    return fetch(baseUrl + id, {
      method: 'GET'
    })
    .then(res => res.json())
  }
}
