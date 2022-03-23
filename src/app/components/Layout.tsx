import Header from './Header'
import './Layout.css'

interface LayoutProps {
    children: any
}

function Layout(props: LayoutProps) {
    return (
        <div className="Layout">
            <Header />
            <div className='pages'> 
                {props.children}
            </div>
    </div>

    )
}

export default Layout