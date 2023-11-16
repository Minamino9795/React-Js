import React from 'react';
import Sidebar from './includes/Sidebar';
import Header from './includes/Header';
import Footer from './includes/Footer';
function MasterLayout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </>
    )
}
export default MasterLayout;