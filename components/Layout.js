import LayoutStyles from '../styles/Layout.module.css'
import Header from './Header'

const Layout = ({children}) => {
    return (
        <div className={LayoutStyles.container}>
            <main className={LayoutStyles.main}>
                <Header />
                {children}
            </main>
        </div>
    )
}

export default Layout
