import React, { ReactNode } from "react";
import {
  FormControl,
  InputLabel,
  Select as MaterialSelect,
  MenuItem,
} from "@mui/material";

interface SelectProps {
  fullWidth: boolean;
  items: readonly string[];
  value?: string;
  label: string;
  onChange: (event: any, child: ReactNode) => void;
}

const Select = ({
  fullWidth,
  items,
  label,
  value,
  onChange,
}: SelectProps): JSX.Element => {
  const formattedItems = React.useMemo(
    () =>
      items.map((item) => ({
        label: item,
        value: item,
        key: item,
      })),
    [items]
  );
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <MaterialSelect
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={onChange}
      >
        <MenuItem value={""}>All</MenuItem>
        {formattedItems.map((item) => (
          <MenuItem key={item.key} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MaterialSelect>
    </FormControl>
  );
};

export default Select;
