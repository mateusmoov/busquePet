
export const getLocationData = async (cep: number | string) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  return response.json()
}