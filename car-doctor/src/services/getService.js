export const getSingleService=async(id)=>{
  const res = await  fetch(`http://localhost:3000/services/api/${id}`)
  const service = await res.json()
  return service;
}