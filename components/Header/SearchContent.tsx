import { lazy, Suspense } from "preact/compat";
import { useUI } from "deco-sites/livinrio/sdk/useUI.ts";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Search {
  items: SearchItem[];
}

export interface SearchItem {
  redirectTo: string;
  image: LiveImage;
  title: string;
  contentText: string;
}

const SearchContentInside = lazy(() =>
  import("deco-sites/livinrio/components/Header/SearchContentInside.tsx")
);

function SearchContent(
  { items }: Search,
) {
  const { displaySearchContent } = useUI();

  const handleClose = () => {
    displaySearchContent.value = false;
  };

  return (
    <>
      {displaySearchContent.value &&
        (
          <Suspense fallback={<span>Loading</span>}>
            <SearchContentInside items={items} handleClose={handleClose} />
          </Suspense>
        )}
    </>
  );
}

export default SearchContent;
