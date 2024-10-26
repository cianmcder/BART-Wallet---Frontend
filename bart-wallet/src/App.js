import './App.css';
import { Header } from './modules/Header.js';
import { CreateNewWallet } from './modules/CreateNewWallet.js';
import { WalletLogin } from './modules/WalletLogin.js';
import { AddToWallet } from './modules/AddToWallet.js';
import { StationsList } from './modules/StationsList.js';
import { OriginDestination } from './modules/OriginDestination.js';
import { Pages } from './modules/Pages';

function Home() {
  return (
      <div>
          <Header />
          <Pages />
      </div>
  );
}

export function Login() {
  return (
      <div>
          <Header />
          <Pages />
          <WalletLogin />
          <CreateNewWallet />
      </div>
  );
}

export function Stations() {
  return (
      <div>
          <Header />
          <Pages />
          <StationsList />
      </div>
  );
}

export function Fare() {
  return (
      <div>
          <Header />
          <Pages />
          <AddToWallet />
      </div>
  );
}

export function Tickets() {
  return (
      <div>
          <Header />
          <Pages />
          <StationsList />
          <OriginDestination />
      </div>
  );
}

export function App() {
  return (
    <div>
      <Home />
    </div>
  );
}