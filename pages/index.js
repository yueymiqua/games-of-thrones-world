import {server} from '../config/index'
import CharactersList from '../components/CharactersList'

export default function Home({characters}) {
  return (
    <div>
      <CharactersList characters={characters}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/characters`)

  const characters = await res.json()

  return {
    props: {
      characters
    }
  }
}
