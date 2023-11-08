import { useEffect , useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer/reducer";
import { setLoading, setQuote } from "../slices/quoteSlice";
import Card from "../components/Card";
import axios from "axios";
import Tags from "../components/Tags";


const Home = () => {

  const [tagsModal, setTagsModal] = useState(false);

  const dispatch = useDispatch();
  let loading = useSelector((state: RootState) => state.quote.loading);
  let tags = useSelector((state: RootState) => state.quote.tags);
  let quote = useSelector((state: RootState) => state.quote.quote);
  let bookmarks = useSelector((state: RootState) => state.quote.bookmarks);



  useEffect(() => {
    if(quote?.content) {
        dispatch(setLoading(false));
        return;
    } 
    fetchQuote();
  }, []); 


  async function fetchQuote() {
    try {
      dispatch(setLoading(true));
      console.log(tags)
      let tagString: string = '?tags=' + tags.map((tag: any) => tag.name).join(',');
      
      let str = 'https://api.quotable.io/quotes/random' + tagString;
      console.log(str)
      const response = await axios.get(
        'https://api.quotable.io/quotes/random' + tagString,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      dispatch(setQuote(response.data[0]));
      quote = response.data[0];
      dispatch(setLoading(false));
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }


  return (
    <>
      <div className="w-full mt-20">
        <div className="flex flex-col">
          <div className="min-h-[40vh]">
            {!loading && quote && quote.content ? (
                <Card bookmarks={bookmarks} quote={quote}  />
            ) : (
              <div className="w-[80%] lg:w-[50%] mx-auto flex flex-col justify-center items-center gap-[50px]">
                <div className="kinetic mt-10"></div>
                <div className="mb-10 text-3xl text-white animate-pulse">
                  Fetching Quote ...
                </div>
              </div>
            )}

          </div>


          <div className="flex justify-center">
            <div className="w-[300px] flex justify-center">
              <button
                onClick={fetchQuote}
                className="text-2xl font-semibold rounded-full bg-green-600 w-[150px] lg:w-[230px] h-[50px] hover:bg-yellow-400 hover:scale-110 hover:font-bold transition-all duration-200 ease-in-out"
              >
                New Quote
              </button>
            </div>

            <div className="w-[300px] l flex justify-center">
              <button
                onClick={() => setTagsModal(true)}
                className="text-2xl font-semibold rounded-full text-black bg-white w-[100px] lg:w-[170px] h-[50px] hover:bg-black hover:text-white hover:scale-110 hover:font-bold transition-all duration-200 ease-in-out"
              >
                Tags
              </button>
            </div>

          </div>



        </div>
      </div>
      {
      tagsModal && (
        <div className="z-[100] fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-opacity-70 bg-black">
          <div className="relative w-[80%] h-[80%] figma-bg overflow-x-auto  rounded-2xl">
            <Tags />
          </div>
          <div onClick={() => setTagsModal(!tagsModal)} className="absolute z-[110] top-7 right-10 text-white text-5xl transition-all
          duration-500 ease-in-out hover:scale-125 hover:rotate-180 font-bold cursor-pointer">
            &times;
          </div>
        </div>
      )
    }
              
    </>

  );
}

export default Home;
