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
          <Header title="Home Page" />
          <Pages />
      </div>
  );
}

export function Login() {
  return (
      <div>
          <Header title="Login or Sign Up" />
          <Pages />
          <WalletLogin />
          <CreateNewWallet />
      </div>
  );
}

export function Stations() {
  return (
      <div>
          <Header title="BART Stations" />
          <Pages />
          <StationsList />
      </div>
  );
}

export function Fare() {
  return (
      <div>
          <Header title="Add Fare to Wallet" />
          <Pages />
          <AddToWallet />
      </div>
  );
}

export function Tickets() {
  return (
      <div>
          <Header title="Buy Ticket" />
          <Pages />
          <StationsList />
          <OriginDestination />
      </div>
  );
}

export function App() {
  loginCheck();
  return (
    <div>
      <Home />
    </div>
  );
}

//when page loads, check backend to see if username has been recently logged in on current device
function loginCheck() {
  //does nothing right now
  //create database object on backend?
  //int Id, String Username, String MAC, DateTime LastLogin, boolean RememberMe?
}