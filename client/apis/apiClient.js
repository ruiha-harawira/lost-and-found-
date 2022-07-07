import request from 'superagent'

const lostPetUrl = '/api/lost/'

export function getAllLostPets() {
  return request.get(lostPetUrl).then((res) => {
    return res.body
  })
}
