import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer/reducer";
import { setTags } from "../slices/quoteSlice";
function Tags() {
  const [allTags, setAllTags] = useState([]);
  const [tagLoading, setTagLoading] = useState(false);

  const tags = useSelector((state: RootState) => state.quote.tags);
  const dispatch = useDispatch();

  const tagHandler = (tag: any) => {
    if (tags.filter((t: any) => t._id === tag._id).length > 0) {
      let newtags = tags.filter((t: any) => t._id !== tag._id);
      dispatch(setTags(newtags));
    } else {
      dispatch(setTags([...tags, tag]));
    }
  };
  console.log(tags);

  async function fetchTags() {
    setTagLoading(true);
    try {
      const response = await axios.get("https://api.quotable.io/tags");
      setAllTags(response.data);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
    setTagLoading(false);
  }
  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="container w-[70%] mx-auto mt-8 mb-10">
      <div>
        <h1 className="text-4xl font-extrabold mb-8 text-black">Quotable Tags</h1>
        {
          tagLoading ? 
          (
            <>
              <div className="lds-ellipsis mt-[15%]"><div></div><div></div><div></div><div></div></div>
            </>
          ) 
          :
          (
            <> 
          <ul className="grid grid-cols-3 gap-4">
            {allTags.map((tag: any) => (
              <li
                key={tag._id}
                className={`${
                  tags.filter((t: any) => t._id === tag._id).length > 0
                    ? "bg-green-600"
                    : "bg-gray-200"
                } 
                cursor-pointer p-2 rounded shadow transition-all duration-200 ease-in-out hover:scale-105`}
                onClick={() => tagHandler(tag)}
              >
                <span className="font-bold">{tag.name}</span> - {tag.quoteCount}{" "}
                quotes
              </li>
            ))}
          </ul>
            </>
          )
        }

      </div>
    </div>
  );
}

export default Tags;
