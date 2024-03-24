"use client"
import Button from './Button';
import Twitter from '../assets/icons/brands/Twitter';
import Discord from '../assets/icons/brands/Discord';
import '../styling/Footer.css';
import Modal from './Modal';
//wait maybe we don't need use disclaimer?
import Disclaimer from './Disclaimer';

import Link from 'next/link';
import { useThemeDispatch } from '../theme-provider';

function Footer() {

  const discordUrl = 'https://discord.com/';
  const twitterUrl = 'https://twitter.com/';
  const docsUrl = 'https://github.com/';

  //The disclaimer is different but doesn't seem like big of a deal enough to actually change

  const dispatch = useThemeDispatch();
  const setDisclaimer = () => {
    if (dispatch !== null) {
      dispatch({ type: "SHOW_DISCLAIMER" });
    } else {
      console.error("Dispatch context is null. Are you within theme provider?");
    }
  }

  //TODO:
  // reformatted? it looks kinda ugly.
  return (
    <>
      <div className="footer padding-full">
        <div className="footer-left"></div>
        <div className="footer-center gap-common break-width-m">
          <Link href={docsUrl}>
            <Button>Docs</Button>
          </Link>
          <Button onButtonClick={() => {
            setDisclaimer();
          }}>
            Terms of Use
          </Button>
          <div className=" display-flex-row gap-common">
            <Link href={discordUrl}>
              <Button className="icon-button padding-none">
                <div className="svg-icon svg-shadow display-flex">
                  <Discord />
                </div>
              </Button>
            </Link>
            <Link href={twitterUrl}>
              <Button className="icon-button padding-none">
                <div className="svg-icon svg-shadow display-flex">
                  <Twitter />
                </div>
              </Button>
            </Link>


          </div>
        </div>
        <div className="footer-right"></div>
      </div>
    </>
  );
}

export default Footer;
