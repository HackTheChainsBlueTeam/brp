import '../styling/Input.css';
import Button from './Button';
import { isNumber as checkIsNumber } from '../functions/formatters';
import EditIcon from '../assets/icons/EditIcon';
import XIcon from '../assets/icons/XIcon';

interface InputProps {
  text?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  label?: string;
  placeholder?: any;
  value?: any;
  setValue?: any;
  submit?: any;
  showMaxButton?: boolean;
  maxValueFunction?: () => void;
  isValid?: boolean;
  errorMessage?: string;
  isNumber?: boolean;
  readonly?: boolean;
  showEditButton?: boolean;
  isEditButtonEnabled?: boolean;
  editValueFunction?: () => void;
  showResetButton?: boolean;
  resetValueFunction?: () => void;
  showApplyButton?: boolean;
  applyButtonFunction?: () => void;
  isApplyButtonDisabled?: boolean;
}

const Input = (props: InputProps) => {
  const {
    onClick = () => {},
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    className = '',
    value = '',
    showMaxButton = false,
    maxValueFunction = () => {},
    isValid = true,
    label = '',
    errorMessage = '',
    isNumber = true,
    readonly = false,
    showEditButton = false,
    isEditButtonEnabled = false,
    editValueFunction = () => {},
    showResetButton = false,
    resetValueFunction = () => {},
    showApplyButton = false,
    applyButtonFunction = () => {},
    isApplyButtonDisabled = false,
  } = props;

  const handleChange = (event: any) => {
    if (props.setValue !== undefined) {
      props.setValue(event.target.value);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (props.submit) {
      props.submit();
    }
  };

  const checkNumberError = value !== '' && isNumber && !checkIsNumber(value);
  const errorStatus = value !== '' && (!isValid || checkNumberError) ? 'input-error ' : ' ';

  const displayErrorMessage = () => {
    if (checkNumberError) {
      return 'This value must be a number.';
    } else {
      if (errorMessage !== '' && !isValid) {
        return errorMessage;
      } else {
        return <></>;
      }
    }
  };

  return (
    <div className={'common-input w-100 ' + errorStatus + ' ' + className}>
      {label !== '' ? (
        <div className="common-input-label disable-highlight display-flex font-xl font-bold-half margin-left">
          <div className="filled-bg padding-left-half padding-right-half">{label}</div>
        </div>
      ) : (
        <></>
      )}
      <div className="display-flex-row gap-common">
        <div
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={
            'common-input-field border-full border-color-light display-flex-row vertical-center w-100'
          }
        >
          <form
            onSubmit={handleSubmit}
            className={'common-input-form display-flex-start w-100 ' + errorStatus}
            onClick={showEditButton ? editValueFunction : () => {}}
          >
            <input
              className={
                'padding-full w-100 font-xxl font-primary ' +
                (props.className ? props.className : '') +
                (showEditButton ? ' clickable' : '')
              }
              placeholder={props.placeholder ? props.placeholder : ''}
              value={props.value ? props.value : ''}
              type="text"
              onChange={handleChange}
              readOnly={readonly}
            />
          </form>
          {showMaxButton ? (
            <Button
              className="max-input-button h-100 text-color-light-2 font-s padding-full"
              text="MAX"
              onButtonClick={maxValueFunction}
            />
          ) : (
            <></>
          )}
          {showResetButton ? (
            <Button
              className="max-input-button h-100 font-s text-color-danger padding-full"
              text="Reset"
              onButtonClick={resetValueFunction}
            />
          ) : (
            <></>
          )}
          {showEditButton ? (
            <Button
              className="max-input-button h-100 font-s padding-full"
              onButtonClick={editValueFunction}
            >
              {isEditButtonEnabled ? (
                <XIcon className="fill-svg-primary" />
              ) : (
                <EditIcon className="fill-svg-primary" />
              )}
            </Button>
          ) : (
            <></>
          )}
        </div>
        {showApplyButton ? (
          <Button
            className="important-button apply-button"
            onButtonClick={applyButtonFunction}
            disabled={isApplyButtonDisabled}
          >
            Apply
          </Button>
        ) : (
          <></>
        )}
      </div>
      <div className="common-input-error-message padding-left padding-top-half">
        {displayErrorMessage()}
      </div>
    </div>
  );
};

export default Input;
