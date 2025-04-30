import CuratorsPage from '@pages/CuratorsPage/ui/CuratorsPage';
import HomePage from '@pages/HomePage/ui/HomePage';
import OtherPage from '@pages/OtherPage/ui/OtherPage';
import ProgramsPage from '@pages/ProgramsPage/ui/ProgramsPage';
import TariffsPage from '@pages/TariffsPage/ui/TariffsPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/curators' element={<CuratorsPage />} />
			<Route path='/programs' element={<ProgramsPage />} />
			<Route path='/tariffs' element={<TariffsPage />} />
			<Route path='/other' element={<OtherPage />} />
		</Routes>
	);
};

export default App;
