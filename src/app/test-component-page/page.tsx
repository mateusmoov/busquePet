import { PetCard, Section } from "../components"

const TestComponentPage = () => {
  return (
    <Section className="pt-6">
      <PetCard name="Aquiles" petImage="/cachorro.jpg" age="12 anos" size="large" gender="male" address="Rio de Janeiro" />
    </Section>
  );
}

export default TestComponentPage