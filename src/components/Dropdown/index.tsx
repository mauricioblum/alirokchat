import React from 'react';

import Select, { StylesConfig } from 'react-select';
import { Container } from './styles';

const options = [
  { value: 'parcel', label: 'Parcel Shipments' },
  { value: 'air', label: 'Air Shipments' },
  { value: 'land', label: 'Land Shipments' },
  { value: 'sea', label: 'Sea Shipments' },
];

const customStyles: StylesConfig<{ label: string; value: string }, boolean> = {
  option: (provided, state) => ({
    ...provided,
    padding: 20,
    color: state.isFocused ? '#fff' : '#748EB5',
    background: state.isFocused ? '#748EB5' : 'transparent',
  }),
  singleValue: (provided) => {
    return { ...provided, color: '#748EB5', fontWeight: 'bold' };
  },
  control: (provided) => ({
    ...provided,
    border: 0,
    borderColor: 'transparent',
    '&:hover': {
      border: 0,
      boxShadow: 'unset',
    },
  }),
  indicatorSeparator: () => ({}),
  placeholder: (provided) => {
    return {
      ...provided,
      color: '#CCD9F2',
    };
  },
};

interface DropdownProps {
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onSelect }) => {
  return (
    <Container>
      <Select
        options={options}
        styles={customStyles}
        defaultValue={{ value: 'parcel', label: 'Parcel Shipments' }}
        onChange={(option, actionType) => {
          return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            actionType.action === 'select-option' && onSelect(option?.value)
          );
        }}
      />
    </Container>
  );
};

export default Dropdown;
