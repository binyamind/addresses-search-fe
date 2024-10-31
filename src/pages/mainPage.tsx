import StyledButton from "@/components/StyledButton";
import { StyledInput } from "@/components/StyledInput";
import { StyledMultiSelectCheckBox } from "@/components/StyledMultiSelectCheckBox";
import { StyledRadioButton } from "@/components/StyledRadioButton";
import { StyledTable } from "@/components/styledTable";
import { useSearch } from "@/hooks/useSearch";
import { ResponseAddressWithFilters } from "@/models/responseAddress";
import { SearchAddressTerm } from "@/models/SearchAddressTerm";
import { useSearchStore } from "@/store/search.store";
import { useEffect } from "react";

export const MainPage = () => {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const results = useSearchStore((state) => state.results);
  const searchSpec = useSearchStore((state) => state.searchSpec);
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);
  const setResults = useSearchStore((state) => state.asyncSetResults);
  const setSearchSpec = useSearchStore((state) => state.setSearchSpec);
  const setInitFilters = useSearchStore((state) => state.initSetFilters);
  const setFilters = useSearchStore((state) => state.setFilters);
  const apiFilters = useSearchStore((state) => state.apiFilters);
  const setApiFilters = useSearchStore((state) => state.setApiFilters);

  const filters = useSearchStore((state) => state.filters);
  const onSuccess = ({
    data,
  }: {
    data: { result: { data: ResponseAddressWithFilters } };
  }) => {
    if (data?.result?.data) setResults(data.result.data.addresses);
    if (data.result.data.availableFilters)
      setInitFilters(data.result.data.availableFilters);
  };
  const { refetch, isFetching } = useSearch(
    {
      q: searchTerm,
      searchSpec: searchSpec,
      filters: apiFilters,
    },
    onSuccess,
    (err) => {
      console.log(err);
    },
    false
  );
  useEffect(() => {
    if (apiFilters !== null) {
      refetch().then((res) => {
        if (res.status === "success") {
          setApiFilters(null);
        }
      });
    }
  }, [apiFilters]);
  const getApiFilters = (objKeyValue: { [key: string]: boolean }) => {
    return Object.keys(objKeyValue).filter((keyItem) => {
      return objKeyValue[keyItem];
    });
  };
  if (isFetching) return <>Loading...</>;
  return (
    <div className="flex flex-col w-[80%] ">
      <h1 className="mt-16px self-center text-[26px]">
        אינדקס חיפוש רחוב בבאר שבע
      </h1>
      <div className="flex flex-col gap-3 p-[14px] ">
        <div className="flex  flex-col gap-3 p-[14px] ">
          <div className="flex gap-3 p[16px] ">
            <StyledInput
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              value={searchTerm}
            />
            <StyledButton
              text="חיפוש"
              color="bg-gray-600 rounded-[12px]"
              textColor="text-white-500"
              variant={"default"}
              hover="hover:bg-gray-700"
              size="lg"
              onClickHandler={async () => {
                if (!searchTerm) return;
                const res = await refetch();
                if (res.status === "success") {
                  console.log("success");
                }
              }}
            />

            <StyledRadioButton
              onValueChange={(e) => {
                setSearchSpec(e as SearchAddressTerm);
              }}
              defaultValue={searchSpec}
            />
          </div>
          {isFetching && <>Loading...</>}
          <div className="flex justify-between gap-2 items-top  ">
            {results?.length > 0 && <StyledTable items={results} />}
            {results?.length === 0 && (
              <div className="mr-[14px]">לא נמצאו תוצאות</div>
            )}
            <div className="flex flex-1 w-100% h-100% gap-3 justify-center mt-[10px] ">
              <div className="flex h-[70%] w-100% flex-col gap-5 flex-1  p-[12px] m-[6px] rounded-xl ">
                {filters &&
                  Object.keys(filters).map((key) => {
                    return (
                      <div
                        key={key}
                        className="flex flex-col justify-center gap-1 border p-[12px] rounded-xl "
                      >
                        <StyledMultiSelectCheckBox
                          title={`סנן לפי ${
                            key === "availableType" ? "סוג" : "שכונה"
                          }`}
                          items={Object.keys(filters[key])}
                          onChnage={(e) => {
                            const { name, checked } = e.target;
                            const newFilters = {
                              ...filters,
                              [key]: {
                                ...filters[key],
                                [`${name}`]: checked,
                              },
                            };
                            setFilters(newFilters);
                          }}
                        />
                      </div>
                    );
                  })}
                {Object.keys(filters).length > 0 && (
                  <StyledButton
                    text="סנן תוצאות"
                    color="bg-gray-600 rounded-[12px]"
                    textColor="text-white-500"
                    variant={"default"}
                    hover="hover:bg-gray-700"
                    size="lg"
                    onClickHandler={async () => {
                      const availableType = getApiFilters(
                        filters["availableType"]
                      );
                      const availableNeighbourhoods = getApiFilters(
                        filters["availableNeighbourhoods"]
                      );

                      const newFilters = {
                        availableNeighbourhoods:
                          availableNeighbourhoods.length > 0
                            ? availableNeighbourhoods
                            : [],
                        availableType:
                          availableType.length > 0 ? availableType : [],
                      };
                      setApiFilters(newFilters);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
