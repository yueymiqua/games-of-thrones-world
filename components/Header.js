import HeaderStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={HeaderStyles.title}>
            <h1>Welcome to the <span>Game of Thrones</span> Character List</h1>
        </div>
    )
}

export default Header
