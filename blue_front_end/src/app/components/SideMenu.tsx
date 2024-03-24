"use client"
import Button from './Button';
import Link from 'next/link'
import '../styling/SideMenu.css';

import HomeIcon from '../assets/icons/HomeIcon';
import DashboardIcon from '../assets/icons/DashboardIcon';
import PlayIcon from '../assets/icons/PlayIcon';

import { usePathname } from 'next/navigation'
import { useTheme } from '../theme-provider';

function SideMenu() {
  //parameterize later
  const state = useTheme(); // Use the useTheme hook to get the theme state
  const isMobile = state?.isMobile ?? false; // Use nullish coalescing to default to false if state is null
  const pathname = usePathname()
  //guardclause
  if (isMobile || pathname ==="/") {
    return (<></>);
  }

  //hard coding links
  return (
    <div className="side-menu-wrapper padding-top-half padding-left padding-right">
        <div className={'side-menu left-sticky display-flex-col ' + (isMobile ? ' mobile' : '')}>
        <div className="side-menu-top display-flex-col flex-grow-1">

            <span key='side-menu-route-button-1' className="margin-bottom">
              <Link href="/" className={`link ${pathname ==='/' ? 'selected-route' : ''}`}>
                <Button className="side-menu-button no-padding" iconStart={<HomeIcon className="svg-icon fill-svg-primary margin-half padding-half"/>} >
                  <span className="padding-top padding-bottom">Home</span>
                </Button>
              </Link>
            </span>

            <span key='side-menu-route-button-2' className="margin-bottom">
              <Link href="/dashboard" className={`link ${pathname ==='/dashboard' ? 'selected-route' : ''}`}>
                <Button className="side-menu-button no-padding" iconStart={<DashboardIcon className="svg-icon fill-svg-primary margin-half padding-half"/>}>
                  <span className="padding-top padding-bottom">Dashboard</span>
                </Button>
              </Link>
            </span>

            <span key='side-menu-route-button-3' className="margin-bottom">
              <Link href="/testing" className={`link ${pathname ==='/testing' ? 'selected-route' : ''}`}>
                <Button className="side-menu-button no-padding" iconStart={<PlayIcon className="svg-icon fill-svg-primary margin-half padding-half"/>}>
                  <span className="padding-top padding-bottom">Testing</span>
                </Button>
              </Link>
            </span>
            
          </div>
          <div className="side-menu-bottom display-flex-col "></div>
        </div>
      </div>
  );
}

export default SideMenu;
