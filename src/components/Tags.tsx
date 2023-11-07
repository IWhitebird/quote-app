import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../reducer/reducer';
function Tags() {

  const [allTags , setAllTags] = useState([]);

  const tags = useSelector((state : RootState) => state.quote.bookmarks);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchTags() {
      try {
        const response = await axios.get('https://api.quotable.io/tags');
        setAllTags(response.data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    }

    fetchTags();
  }, []);

  return (
    <div className="container mx-auto mt-8">

      <div>
        <h1 className="text-2xl font-bold mb-4">Your Tags</h1>
        <ul className="grid grid-cols-3 gap-4">
          {tags.map((tag : any) => (
            <li
              key={tag._id}
              className="bg-gray-200 p-2 rounded shadow hover:bg-gray-300"
            >
              <span className="font-bold">{tag.name}</span> - {tag.quoteCount} quotes
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Quotable Tags</h1>
        <ul className="grid grid-cols-3 gap-4">
          {allTags.filter((tag : any) => !tags.includes(tag._id)).map((tag : any) => (
            <li
              key={tag._id}
              className="bg-gray-200 p-2 rounded shadow hover:bg-gray-300"
            >
              <span className="font-bold">{tag.name}</span> - {tag.quoteCount} quotes
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
}

export default Tags;
