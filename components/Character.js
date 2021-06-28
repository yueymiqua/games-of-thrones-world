import charactersStyles from '../styles/Characters.module.css'

const Character = ({character}) => {
    return (
        <div className={charactersStyles.card}>
            <h2>{character.characterName}</h2>
            <h3>{character.houseName}</h3>
            <img src={character.characterImageThumb}/>
            <br />
        </div>
    )
}

export default Character
