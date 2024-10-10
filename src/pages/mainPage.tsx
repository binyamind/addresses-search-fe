import StyledButton from "@/components/StyledButton";
import { StyledInput } from "@/components/StyledInput";
import { StyledRadioButton } from "@/components/StyledRadioButton";
import { StyledTable } from "@/components/styledTable";
import { useSearch } from "@/hooks/useSearch";
import { ResponseAddress } from "@/models/responseAddress";
import { SearchAddressTerm } from "@/models/SearchAddressTerm";
import { useSearchStore } from "@/store/search.store";

export const MainPage = () => {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const results = useSearchStore((state) => state.results);
  const searchSpec = useSearchStore((state) => state.searchSpec);
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);
  const setResults = useSearchStore((state) => state.asyncSetResults);
  const setSearchSpec = useSearchStore((state) => state.setSearchSpec);

  const onSuccess = ({
    data,
  }: {
    data: { result: { data: Array<ResponseAddress> } };
  }) => {
    if (data?.result?.data) setResults(data.result.data);
  };
  const { refetch, isFetching } = useSearch(
    { q: searchTerm, searchSpec: searchSpec },
    onSuccess,
    (err) => {
      console.log(err);
    },
    false
  );
  if (isFetching) return <>Loading...</>;
  return (
    <div className="flex flex-col w-[80%]">
      <h1 className="mt-16px self-center text-[26px]">
        אינדקס חיפוש רחוב בבאר שבע
      </h1>
      <div className="flex gap-3 p-[14px]">
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
              setSearchTerm("");
            }
          }}
        />

        <StyledRadioButton
          onValueChange={(e) => {
            setSearchSpec(e as SearchAddressTerm);
          }}
        />
     
      </div>
      {isFetching && <>Loading...</>}
      {results?.length > 0 && <StyledTable items={results} />}
      {results?.length === 0 && <div className="mr-[14px]">לא נמצאו תוצאות</div>}
    </div>
  );
};
