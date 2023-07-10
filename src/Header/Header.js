import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Report from './Report/Report';

const Header = () => {
    return (
        <Routes>
            <Route path='/report' element={<Report></Report>}></Route>



        </Routes>
    );
};

export default Header;