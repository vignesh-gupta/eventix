"use client";

import {
  EVENT_CATEGORIES,
  EVENT_TYPES,
} from "@/lib/constants/mappingConstants";
import { useEffect, useState } from "react";
import SearchBox from "./search";

import useDebounce from "@/lib/hooks/use-debounce";
import { useRouter } from "next/navigation";
import qs from "query-string";
import FilterDropdown from "./filter-dropdown";

type FiltersProps = {
  query: {
    category?: string;
    type?: string;
    search?: string;
  };
};

const Filters = ({ query } : FiltersProps) => {
  const router = useRouter();

  const [search, setSearch] = useState(query.search || "");
  const [type, setType] = useState(query.type || "");
  const [category, setCategory] = useState(query.category || "");

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/events",
        query: {
          type: type,
          category: category,
          search: debouncedSearch,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedSearch, category, type, router]);

  return (
    <div className="flex flex-wrap gap-3 grow">
      <SearchBox search={search} setSearch={setSearch} />

      <FilterDropdown
        setValue={setType}
        value={type}
        options={EVENT_TYPES}
        placeholder="Type of event"
      />

      <FilterDropdown
        setValue={setCategory}
        value={category}
        options={EVENT_CATEGORIES}
        placeholder="Category"
        className="basis-[200px]"
      />
    </div>
  );
};

export default Filters;
