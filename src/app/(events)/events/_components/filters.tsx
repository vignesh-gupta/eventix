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

const Filters = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

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
    <div className="flex flex-wrap gap-3">
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
        className="w-[300px]"
      />
    </div>
  );
};

export default Filters;
