import { useSyncExternalStore } from 'react';
/*
export function useTermsAgreed() {
  const isTermsAgreed = useSyncExternalStore(subscribe, getSnpshot);
  return isTermsAgreed;
}

function getSnapshot() {
  if (typeofwindow == undefined){
    
  }
  return window.localStorage.getItem("termsAgreedTimeStamp");
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
*/