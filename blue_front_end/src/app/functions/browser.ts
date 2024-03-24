declare const window: any;
const DEBUG_MODE = false;
//I saw this on twitter idk where we should implement it but its relevant.
//should add this in with react sync external when I have time or whatever
//https://x.com/asidorenko_/status/1722682139722862630?s=20
//:)
export function saveTheme(theme: string) {
  window.localStorage.setItem('theme', theme);
}

export function retrieveTheme() {
  return typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
}

export function saveHamburgerMenuPosition(position: string) {
  window.localStorage.setItem('hamburgerMenuPosition', position);
}

export function retrieveHamburgerMenuPosition() {
  return typeof window !== 'undefined' ? window.localStorage.getItem('hamburgerMenuPosition') : null;
}

export function saveAutoBrowserWallet(position: boolean) {
  window.localStorage.setItem('autoBrowserWallet', position.toString());
}

export function retrieveAutoBrowserWallet() {
  return typeof window !== 'undefined' ? window.localStorage.getItem('autoBrowserWallet') : null;
}

export function retrieveTermsAgreedTimestamp() {
  return typeof window !== 'undefined' ? window.localStorage.getItem('termsAgreedTimestamp') : null;
}

//simple boolean function for now.
export function setTermsAgreedTimestamp(agreed: boolean) {
  window.localStorage.setItem("termsAgreedTimeStamp", agreed.toString());
}
