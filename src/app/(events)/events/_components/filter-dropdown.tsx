import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { ClassNameValue } from "tailwind-merge";

type FilterDropdownProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  options: string[];
  className?: ClassNameValue;
};

const FilterDropdown = ({
  setValue,
  value,
  options,
  placeholder,
  className,
}: FilterDropdownProps) => {
  return (
    <Select onValueChange={setValue} value={value}>
      <SelectTrigger className={cn("w-[150px]", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={`category-${option}`} value={option.toLowerCase()}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilterDropdown;
