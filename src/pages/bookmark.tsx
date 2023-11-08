import { useSelector  } from "react-redux";
import Card from "../components/Card";


const Bookmark = () => {
  const bookmarks = useSelector((state: any) => state.quote.bookmarks);

  return (
    <div className="w-full overflow-x-hidden overflow-y-scroll">
      <div className="mt-10 flex flex-col gap-10">
        {bookmarks?.map((quote: any) => (
          <Card key={quote._id} quote={quote} bookmarks={bookmarks} />
        ))}
      </div>
    </div>
  );
}

export default Bookmark;
