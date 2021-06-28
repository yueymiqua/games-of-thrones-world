import charactersStyles from '../styles/Characters.module.css'

const Character = ({character}) => {
    return (
        <div className={charactersStyles.card}>
            <h2>{character.characterName}</h2>
            <h3>{character.houseName}</h3>
            <img src={character.characterImageThumb}/>
            {character.killedBy === undefined ?
                null :
                <h3>Killed By: {character.killedBy}</h3>
            }
            {character.killed === undefined ?
                null :
                character.killed.map(murdered => <h3>Has Killed: {murdered}</h3>)
            }
        </div>
    )
}

export default Character
