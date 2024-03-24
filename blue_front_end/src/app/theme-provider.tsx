"use client"

import './styling/App.css';
import './styling/themes.css';
import './styling/Toast.css';
import "./styling/Home.css"
import "./styling/Body.css"

import { createContext, useContext, useReducer, useEffect } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import SettingsModal from "./components/SettingsModal";
import { useMediaQuery } from 'react-responsive';

//wacky name but oh well
const initialTheme: ThemeState = {
  theme: "beach",
  isSettingsOpen: false,
  showDisclaimer: true,
  isMobile: false,
  hamburgerMenuPosition: "right",
};

interface ThemeState {
  theme: string;
  isSettingsOpen: boolean;
  showDisclaimer: boolean;
  isMobile: boolean;
  hamburgerMenuPosition: string;
}

interface ThemeAction {
  type: 'CHANGE_THEME' | 'TOGGLE_SETTINGS' | 'SHOW_DISCLAIMER' | 'TOGGLE_MOBILE' | 'SET_HAMBURGER_POSITION';
  payload?: any;
}

const ThemeContext = createContext<ThemeState | null>(null);
const ThemeDispatchContext = createContext<React.Dispatch<ThemeAction> | null>(null);

export default function ThemeProvider({ children }: any) {

  const [state, dispatch] = useReducer(themeReducer, initialTheme);
  // Use the useMediaQuery hook at the top level of your component
  const isMobileQuery = useMediaQuery({ maxWidth: 900 });

  // Use useEffect to update the state when the media query changes
  useEffect(() => {
    dispatch({ type: 'TOGGLE_MOBILE', payload: isMobileQuery });
  }, [isMobileQuery]);
  //this should be limited to only have context info no div class info
  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <div data-theme={state.theme} className="App">
          <div className="app-content">
            <Header />
            <div
              className={
                'body-and-footer-container ' +
                'display-flex-row flex-grow-1'
              }
            >
              <SideMenu />
              <div className="display-flex-col flex-grow-1">
                <div className="body padding-full padding-top-half flex-grow-1">
                  {children}
                </div>
              </div>
            </div>
            <Footer />
            <SettingsModal />
          </div>
        </div>
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

//custom hook to get context from wherever in the tree
export function useTheme() {
  return useContext(ThemeContext);
}
//this is a nice custom hook to change context from wherever in the tree.
export function useThemeDispatch() {
  return useContext(ThemeDispatchContext);
}

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'TOGGLE_SETTINGS':
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen,
      };
    case 'SHOW_DISCLAIMER':
      return {
        ...state,
        showDisclaimer: !state.showDisclaimer,
      };
    case 'TOGGLE_MOBILE':
      return {
        ...state,
        isMobile: action.payload,
      };
    case 'SET_HAMBURGER_POSITION':
      if (typeof action.payload === 'string') {
        return {
          ...state,
          hamburgerMenuPosition: action.payload,
        };
      }
      return state;

    default:
      throw Error('Unknown action: ' + action.type);
  }
}

