import {server} from '../../../config'
import Link from 'next/link'

const character = ({character}) => {
    return (
        <>
            <h1>{character.characterName}</h1>
            {character.houseName === undefined ?
                null :
                <h2>Of House {character.houseName}</h2>
            }
            <img src={character.characterImageFull}/>
            {character.parents === undefined ?
                null :
                <>
                    <h2>Known Parent(s)</h2>
                    {character.parents.map(parent => <h3>{parent}</h3>)}
                </>
            }
            {character.siblings === undefined ?
                null :
                <>
                    <h2>Known Sibling(s)</h2>
                    {character.siblings.map(sibling => <h3>{sibling}</h3>)}
                </>
            }
            {character.killedBy === undefined ?
                null :
                <h2>Killed By: {character.killedBy}</h2>
            }
            {character.killed === undefined ?
                null :
                <>
                    <h2>Has Killed: </h2>
                    {character.killed.map(murdered => <h3>{murdered}</h3>)}
                </>
            }
            {character.actorName === undefined ? 
                null :
                <h2>Played By: {character.actorName}</h2>
            }
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(
        `${server}/api/characters/${context.params.characterName}`
    )

    const character = await res.json()

    return {
        props: {
            character
        }
    }
}

export const getStaticPaths = async() => {
    const res = await fetch(
        `${server}/api/characters`
    )

    const characters = await res.json()

    const characterNames = characters.map(character => character.characterName)

    const paths = characterNames.map((characterName) => ({params: { characterName: characterName }}))

    return {
        paths,
        fallback: false
    }
    
}

export default character