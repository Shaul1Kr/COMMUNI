import { useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [maxNumber, setMaxNumber] = useState<number>(60);
  const fetchMoreData = () => {
    setMaxNumber((prev) => prev + 20);
  };
  return (
    <div>
      <InfiniteScroll
        dataLength={maxNumber}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div></div>
        {Array.from({ length: maxNumber }).map((_, i) => (
          <div className="border-2 w-8 h-8 ">{i}</div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
