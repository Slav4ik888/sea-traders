import * as ReactDOM from 'react-dom/client';
// import { StoreProvider } from 'app/providers/store';
// Components
import { App } from './app';
// Styles
import 'app/styles/css/normalize.css';
import 'app/styles/css/styles.css';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    // <StoreProvider>
      <App />
    // </StoreProvider>
  // </React.StrictMode>
);


// git add . && git commit -m "start project" && git push origin main
