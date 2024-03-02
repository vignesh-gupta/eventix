"use client";

import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import { Input } from "@/components/ui/input";

type SearchBoxProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const SearchBox = ({ search, setSearch }: SearchBoxProps) => {
  return (
    <div className="relative grow basis-[95%] lg:basis-0">
      <Input
        placeholder="Search for something new"
        className="pl-10 relative"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <Search className="absolute transform -translate-y-1/2 text-muted-foreground h-4 w-4 top-1/2 left-3" />
    </div>
  );
};

export default SearchBox;
