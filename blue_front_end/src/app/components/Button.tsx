"use client"
import '../styling/Button.css';

interface ButtonProps {
  text?: string;
  onButtonClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  children?: any;
  iconStart?: any;
  iconEnd?: any;
}

const Button = (props: ButtonProps) => {
  let {
    text = '',
    onButtonClick = () => { },
    onMouseEnter = () => { },
    onMouseLeave = () => { },
    disabled = false,
    selected = false,
    className = '',
    children = <span>{text}</span>,
    iconStart = undefined,
    iconEnd = undefined,
  } = props;

  if (disabled) {
    className += ' disabled-button';
  }
  if (selected) {
    className += ' selected-button';
  }

  return (
    <div
      onClick={!disabled ? onButtonClick : () => { }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={
        'common-button border-full display-inline-block disable-highlight ' +
        className +
        (disabled ? ' disabled-text' : ' clickable')
      }
      aria-label={text}
    >
      <span className={'button-contents w-100' + (disabled ? ' disabled-text' : '')}>
        <div className="button-icon-start">{iconStart}</div>
        <div className={'button-children w-100'}>{children}</div>
        <div className="button-icon-end">{iconEnd}</div>
      </span>
    </div>
  );
};

export default Button;
