import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/app/App';
import './app/styles/main.css';

const root = createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
