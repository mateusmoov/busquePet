import { Button, Icon } from './components'


export default function Home() {
  return (
    <>
      <Button variant="filled">Próximo</Button>
      <Button variant="gradient">Quero adotar</Button>
      <Button variant="outlined">
        <span className="text-fuchsia-800">Próximo</span>
      </Button>
    </>
  );
}
