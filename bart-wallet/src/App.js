import './App.css';
import { Header } from './modules/Header.js';
import { CreateNewWallet } from './modules/CreateNewWallet.js';
import { WalletLogin } from './modules/WalletLogin.js';
import { StationsList } from './modules/StationsList.js';
import { OriginDestination } from './modules/OriginDestination.js';
import { Pages } from './modules/Pages';

function App() {
  return (
    <div>
      <Header />
      <CreateNewWallet />
      <WalletLogin />
      <StationsList />
      <OriginDestination />
      <Pages />
    </div>
  );
}

export default App;
