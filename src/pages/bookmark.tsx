import { useSelector  } from "react-redux";
import Card from "../components/Card";


const Bookmark = () => {
  const bookmarks = useSelector((state: any) => state.quote.bookmarks);

  return (
    <div className="w-full overflow-x-hidden overflow-y-scroll">
      <div className="lg:mt-10 flex flex-col gap-10">
        {bookmarks?.map((quote: any) => (
          <Card key={quote._id} quote={quote} bookmarks={bookmarks} />
        ))}

        {
          bookmarks.length === 0 && (
            <div className="mt-10 flex flex-col items-center justify-center
             rounded-2xl gap-5 border-[1px] w-[80%] lg:w-[50%] mx-auto h-[20vh] lg:h-[40vh]">
              <h1 className="text-lg lg:text-4xl  font-bold text-[#aaff2be7]">
                No Bookmarks yet. 🤔</h1>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Bookmark;
