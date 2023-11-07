import axios from "axios";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { RootState } from "../reducer/reducer";
import { setLoading, setQuote } from "../slices/quoteSlice";
import Card from "../components/card";

function Home() {

    const loading = useSelector((state : RootState) => state.quote.loading);
    const tags = useSelector((state : RootState) => state.quote.bookmarks);
    const quote = useSelector((state : RootState) => state.quote.quote);
    const dispatch = useDispatch();
    
    async function fetchQuote() {
        try {
            dispatch(setLoading(true))
            let tagString : string = '?tags=' + tags.join(',');
            
            const response = await axios.get('https://api.quotable.io/quotes/random'+tagString ,{
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            });
            dispatch(setQuote(response.data[0]))
            dispatch(setLoading(false))
        } catch (error) {
            console.error('Error fetching tags:', error);
        }
    }

    useEffect(() => {
        fetchQuote();
      }, []);
    
  return (
    <div className="w-full mt-10">
        <div className="flex flex-col">
            {
                 !loading ?

                (
                    <Card quote={quote} />
                ) :

                (
                    <div className="w-[50%] mx-auto flex flex-col justify-center items-center gap-[50px]">
                        <div className="kinetic mt-10">

                        </div>
                        <div className="mb-10 text-3xl text-white animate-pulse">
                            Fetching Quote ...
                        </div>
                    </div>
                )
            }


            <div className="w-full flex justify-center">
                <button onClick={fetchQuote} className="text-2xl rounded-full
                 bg-green-600 w-[230px] h-[50px] hover:bg-green-400 
                 hover:scale-110 hover:font-bold transition-all duration-200 ease-in-out">
                    New Quote
                </button>
            </div>
        </div>
    </div>

  )
}

export default Home