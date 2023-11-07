function Card({ quote } : { quote: any }) {
  return (
    <div className="w-full flex justify-center mb-12">
      <div className="w-[60%] bg-[#D05252] flex flex-col gap-8 p-4 rounded-lg text-white justify-center">
        <div className="text-3xl mt-5">{quote.content}</div>
        <div className="w-[90%] flex justify-between p-4 mx-auto">
          <div className="italic">#{quote.tags.join("# ")}</div>
          <div className="font-bold">~ {quote.author}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
