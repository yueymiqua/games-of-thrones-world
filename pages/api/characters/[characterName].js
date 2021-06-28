import {characters} from '../../../data'

export default function handler({query: {characterName}}, res){
    const filtered = characters.filter(character => character.characterName === characterName)

    if(filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `character with the name ${characterName} was not found`})
    }
}

