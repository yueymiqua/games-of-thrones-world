import Link from 'next/link'
import charactersStyles from '../styles/Characters.module.css'
import CharacterDetails from '../components/CharacterDetails'

const Character = ({character}) => {
    return (
        <Link href='/character[characterName]' as={`/character/${character.characterName}`}>
            <div className={charactersStyles.card}>
                <h2>{character.characterName}</h2>
                {character.characterImageThumb === undefined ?
                    <img src="https://via.placeholder.com/100"/> :
                    <img src={character.characterImageThumb}/>
                }
            </div>
        </Link>
    )
}

export default Character
