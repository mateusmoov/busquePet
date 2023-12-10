import { PetDetails, Section, HeaderPet } from "../components";


const dummyPetInfo  = {
  name: "Aquiles",
  adopterName: "John Doe",
  image: "/cachorro.jpg",
  age: "2 years",
  size: "Medium",
  gender: "Female",
  address: "123 Main St, Cityville",
  description:
    "Fluffy is a friendly and playful companion looking for a loving home.",
};

const TestComponentPage = () => {
  return <PetDetails petInfo={dummyPetInfo} />;
}

export default TestComponentPage