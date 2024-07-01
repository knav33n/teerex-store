import Header from '@components/common/Header/Header';
import { Outlet } from 'react-router-dom';
import "./Layout.scss";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout