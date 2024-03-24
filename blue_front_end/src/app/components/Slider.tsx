import '../styling/Slider.css';

interface SliderProps {
  label: string;
  value: string;
  min: string;
  max: string;
  errorMessage?: string;
  className?: string;
  setValue?: any;
  displayValue?: string; //Can be same as value prop or something else
  valueLabel?: string; //Label/Unit for displayValue prop
}

function Slider(props: SliderProps) {
  let {
    label = '',
    errorMessage = '',
    className = '',
    value = '',
    min = '',
    max = '',
    displayValue = '',
    valueLabel = '',
  } = props;
  const handleChange = (event: any) => {
    if (props.setValue !== undefined) {
      props.setValue(event.target.value);
    }
  };

  const displayErrorMessage = () => {
    if (errorMessage !== '') {
      return errorMessage;
    } else {
      return <></>;
    }
  };

  return (
    <div className={'w-100 h-100'}>
      {label !== '' ? (
        <div className="common-input-label disable-highlight display-flex-between font-xl font-bold-half margin-left">
          <div className="padding-left-half padding-right-half">{label}</div>
          {displayValue && (
            <div className={'vertical-center display-flex-start font-m'}>
              <span>{`${displayValue}`}</span>
              <span>{`${valueLabel}`}</span>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
      <div
        className={`display-flex-row display-flex-between gap-common slider-margin-top slider-margin-bottom`}
      >
        <div className={'common-input-field-range display-flex-row vertical-center w-100'}>
          <form className={'common-input-form display-flex-start w-100 '}>
            <input
              className={className ? className + ' slider w-100' : 'slider w-100 padding'}
              type="range"
              value={value}
              min={min}
              max={max}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <div className="common-input-error-message padding-left padding-top-half">
        {displayErrorMessage()}
      </div>
    </div>
  );
}

export default Slider;
