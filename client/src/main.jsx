import App from '@app/App';
import '@app/styles/main.css';
import '@app/styles/main.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

if (root) {
	ReactDOM.createRoot(root).render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
} else {
	console.error('Root element not found');
}
