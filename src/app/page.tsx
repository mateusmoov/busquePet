'use client'
import { Button, Icon } from './components'


export default function Home() {
  return (
    <>
      <Button variant="filled">Próximo</Button>
      <Button variant="gradient">Quero adotar um cachorro</Button>
      <Button variant="outlined" className="outline-fuchsia-800" onClick={() => console.log('tomou de bobo')}>
        <span className="text-fuchsia-800">Próximo</span>
      </Button>
    </>
  );
}
