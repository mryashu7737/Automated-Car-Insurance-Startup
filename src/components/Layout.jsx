
import Navbar from "./navbar";


const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div className="main-content min-h-screen">
                {children}
            </div>
           
        </div>
    );
}

export default Layout;