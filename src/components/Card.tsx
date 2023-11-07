import BookmarkIcon from "./BookmarkIcon";
import { setBookmark } from "../slices/quoteSlice";
import { useDispatch } from "react-redux";

function Card({ quote, bookmarks }: { quote: any; bookmarks: any[] }) : React.ReactElement {
  const dispatch = useDispatch();

  function bookmarksHandleV2(e: any) {
    e.preventDefault();
    if (
      bookmarks.filter((bookmark: any) => bookmark._id === quote._id).length > 0
    ) {
      let newbookmark = bookmarks.filter(
        (bookmark: any) => bookmark._id !== quote._id
      );
      dispatch(setBookmark(newbookmark));
    } else {
      dispatch(setBookmark([...bookmarks, quote]));
    }
  }

  return (
    <div className="w-full flex justify-center mb-12 ">
      <div className="relative transition-all duration-200 ease-in-out hover:scale-[101%] w-[60%] bg-[#D05252] flex flex-col gap-8 p-4 rounded-lg text-white justify-center">
        <div className="text-3xl mt-5">{quote.content}</div>
        <div className="w-[90%] flex justify-between p-4 mx-auto">
          <div className="italic">
            {quote.tags.map((tag: any, index: number) => (
              <span key={index}>
                #{tag}
                {index < quote.tags.length - 1 && " "}
              </span>
            ))}
          </div>
          <div className="font-bold">~ {quote.author}</div>
        </div>

        <div className="absolute top-0 scale-125 right-10 z-10">
          <button onClick={(e) => bookmarksHandleV2(e)}>
            <BookmarkIcon
              defValue={
                bookmarks.filter((bookmark: any) => bookmark._id === quote._id)
                  .length > 0
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
