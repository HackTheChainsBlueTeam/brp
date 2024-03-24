import '../styling/ToggleSwitch.css';

interface ToggleSwitchProps {
  id?: string;
  handleChange?: () => void;
  isChecked?: boolean;
  className?: string;
}

const ToggleSwitch = (props: ToggleSwitchProps) => {
  let { id = '', handleChange = () => {}, isChecked = false, className = '' } = props;

  return (
    <div className={'toggle-switch-container ' + className}>
      <div className="toggle-switch" onClick={handleChange}>
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          onChange={handleChange}
          checked={isChecked}
        />
        <label className="toggle-switch-label" htmlFor={id}>
          <span className="toggle-switch-inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
