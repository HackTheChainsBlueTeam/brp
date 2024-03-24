import { useThemeDispatch } from '../theme-provider';
import Button from './Button';
import '../styling/Button.css';
import CogIcon from '../assets/icons/CogIcon';

interface SettingsButtonProps {  // Renamed the interface to match the component name
  className?: string;
}

const SettingsButton = (props: SettingsButtonProps) => {
  const dispatch = useThemeDispatch();
  const { className = '' } = props;

  const toggleSettings = () => {
    if (dispatch !== null) {
      dispatch({ type: 'TOGGLE_SETTINGS' });
    } else {
      console.error('Dispatch context is null. Are you within a ThemeProvider?');
    }
  };

  return (
    <Button
      onButtonClick={toggleSettings}
      className={'settings-button icon-button ' + className}
    >
        <CogIcon className="svg-icon svg-shadow w-100"/>
    </Button>
  );
};

export default SettingsButton;