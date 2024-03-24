"use client"
//This definitely should just be a client function, but why does it work? I should definitely just move all the themeing back
//up to the theme-provider context
import Link from 'next/link';  // Imported Link from next/link for navigation
import '../styling/Header.css';
import AppLogo from '../assets/ExampleLogo';  // Adjusted import for SVG as a component
import SettingsButton from './SettingsButton';
import HamburgerMenu from './HamburgerMenu';
import ConnectButton from './ConnectButton';
import { useTheme } from '../theme-provider';
import ChainSwitcher from './ChainSwitcher';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  className?: string;
}

function Header(props: HeaderProps) {
  const state = useTheme(); // Use the useTheme hook to get the theme state
  const { className = '' } = props;
  const path = usePathname();

  return (
    <div
      className={
        'header padding-full vertical-center horizontal-center gap-common' +
        (state?.isMobile ? ' mobile' : '') +
        ' top-sticky ' +
        className
      }
    >
      <div className="header-container display-flex-center">
        {!state?.isMobile ? (
          <div className="header-left h-100">
            <div className="header-logo-container w-100" key={'header-route-button'}>
              <Link href="/">
                <AppLogo className="app-logo fill-svg-primary h-100" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="header-mobile-title-container w-100">
            <h3 className="header-mobile-title">

                    <span className="mobile-route-title">
                      {path}
                    </span>

            </h3>
          </div>
        )}
        {!state?.isMobile && (
          <div className="header-center w-100">
            <div className="header-center-positioning">
              <div className="display-flex-row display-flex-align-start w-100 gap-common horizontal-center"></div>
            </div>
          </div>
        )}
        {!state?.isMobile ? (
          <>
            <div className="header-right gap-common vertical-center">
              <SettingsButton />
              <ChainSwitcher />
              <div className="align-self-center">
                <ConnectButton />
              </div>
            </div>
          </>
        ) : (
          <HamburgerMenu />
        )}
      </div>
    </div>
  );
}
// the second settings Button needs to be replaced with hamburger Menu
export default Header;