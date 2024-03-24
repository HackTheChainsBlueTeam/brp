"use client";
import { useState, useContext } from 'react';
import HamburgerIcon from '../assets/icons/HamburgerIcon';
import Link from 'next/link';
import Button from './Button';
import ExampleLogo from '../assets/ExampleLogo';
import { useTheme, useThemeDispatch } from '../theme-provider';
import '../styling/HamburgerMenu.css';
import SettingsButton from './SettingsButton';
import ConnectButton from './ConnectButton';
import ChainSwitcher from './ChainSwitcher';
//todo get supported chains from the wallet modal
//TODO re-add network warning
export default function HamburgerMenu() {
  const state = useTheme();
  const dispatch = useThemeDispatch();

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  //hard coding links. should add a routes.ts file
  return (
    <nav className="hamburger-menu">
      <Button
        className={`hamburger-btn ${state ? state.hamburgerMenuPosition : ''}-padded`}
        onButtonClick={handleToggle}
      >
          <HamburgerIcon className="hamburger-button-icon" />
      </Button>
      <div
        className={`hamburger-overlay ${state ? state.hamburgerMenuPosition : ''} ${navbarOpen ? ' show-menu' : ''
          }`}
        onClick={closeMenu}
      />
      <div
        className={`hamburger-panel ${state ? state.hamburgerMenuPosition : ''} border-clear ${navbarOpen ? ' show-menu' : ''
          }`}
      >
        <div className="w-100 h-100 display-flex">
          <div className="hamburger-wrapper display-flex-col flex-grow-1 padding-full">
            <div className="hamburger-content display-flex gap-common">
              <Link
                href="/"
                className="w-100 padding-bottom horizontal-center"
                onClick={closeMenu}
              >
                  <ExampleLogo className="hamburger-panel-header w-100 fill-svg-primary"/>
              </Link>

              <span key={'hamburger-route-button-' + 1}>
                <Link href="/">
                  <Button
                    onButtonClick={() => {
                      closeMenu();
                    }}
                    className={'hamburger-button no-padding'}
                  >
                    <span className="padding-top padding-bottom padding-right">
                      Home
                    </span>
                  </Button>
                </Link>
              </span>

              <span key={'hamburger-route-button-' + 2}>
                <Link href="/dashboard">
                  <Button
                    onButtonClick={() => {
                      closeMenu();
                    }}
                    className={'hamburger-button no-padding'}
                  >
                    <span className="padding-top padding-bottom padding-right">
                      Dashboard
                    </span>
                  </Button>
                </Link>
              </span>

              <span key={'hamburger-route-button-' + 3}>
                <Link href="/testing">
                  <Button
                    onButtonClick={() => {
                      closeMenu();
                    }}
                    className={'hamburger-button no-padding'}
                  >
                    <span className="padding-top padding-bottom padding-right">
                      Testing
                    </span>
                  </Button>
                </Link>
              </span>

            </div>
            <div className="hamburger-panel-footer gap-common display-flex-col">
            <div className="display-flex-end display-flex-row">
              <ChainSwitcher/>
              </div>
              <div className="hamburger-panel-footer-right display-flex-end display-flex-row flex-grow-1">
                <SettingsButton />
                <ConnectButton />
              </div>
            </div>
            <div className="warning-gap padding-bottom" />
          </div>
        </div>
      </div>
    </nav>
  );
}
