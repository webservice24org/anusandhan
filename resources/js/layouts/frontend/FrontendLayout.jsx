// resources/js/layouts/frontend/FrontendLayout.jsx
import React from 'react';

const FrontendLayout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Website Header</h1>
                {/* Add frontend navigation here */}
            </header>
            <main>{children}</main>
            <footer>Website Footer</footer>
        </div>
    );
};

export default FrontendLayout;
