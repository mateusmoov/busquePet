
export const getLocationData = async (cep: number) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  return response.json()
}