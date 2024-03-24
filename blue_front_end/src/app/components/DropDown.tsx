import Select from 'react-select';
import '../styling/DropDown.css';
//this is unused so maybe useless
interface DropDownProps {
  options: DropDownOption[] | [];
  submit?: any;

  value: any;
  onChange: any;
  isMulti: boolean;
  isSearchable: boolean;
  placeholder?: string;
  className?: any;
}

type DropDownOption = {
    label: string;
    value: string | number | React.Component;
  };

const DropDown = (props: DropDownProps) => {
  const { className = '' } = props;

  return (
    <Select
      className={'dropdown ' + className}
      value={props.value}
      options={props.options}
      classNamePrefix="dropdown"
      onChange={props.onChange}
      isMulti={props.isMulti}
      isSearchable={props.isSearchable}
      placeholder={props.placeholder}
    />
  );
};

export default DropDown;
