import { PetDetails } from "../components";


const dummyPetInfo  = {
  name: "Fluffy",
  adopterName: "John Doe",
  image: "/cachorro.jpg",
  age: "2 years",
  size: "Medium",
  gender: "Female",
  address: "123 Main St, Cityville",
   description: `
    Fluffy is a lovable and energetic pet seeking a forever home. She enjoys long walks in the park,
    playing fetch, and cuddling up on the couch. Fluffy is great with children and other pets, making
    her the perfect addition to any family. She is spayed, up-to-date on vaccinations, and ready to bring
    joy and companionship to her new home. If you're looking for a furry friend, consider adopting Fluffy!
  `,
};

const TestComponentPage = () => {
  return <PetDetails petInfo={dummyPetInfo} />;
}

export default TestComponentPage