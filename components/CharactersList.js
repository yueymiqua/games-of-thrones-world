import Character from './Character'
import styles from '../styles/Characters.module.css'

const CharactersList = ({characters}) => {
    return (
        <div className={styles.grid}>
            {characters.map(character => 
                <Character character={character}/>
            )}
        </div>
    )
}

export default CharactersList
