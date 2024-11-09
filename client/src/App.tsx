import { useCallback, useRef, useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [maxNumber, setMaxNumber] = useState<number>(600);
  const primeNumbers = useRef(new Set([2]));

  const fetchMoreData = () => {
    setMaxNumber((prev) => prev + 20);
  };

  const isPrime = useCallback((num: number) => {
    if (num == 1) return true;
    if (primeNumbers.current.has(num)) return true;
    for (const primeNumber of primeNumbers.current)
      if (num % primeNumber === 0) return false;
    primeNumbers.current.add(num);
    return true;
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={maxNumber}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        hasChildren={false}
      >
        <div className="grid grid-cols-10">
          {Array.from({ length: maxNumber }).map((_, i) => (
            <div
              key={i}
              className={`border-2 w-8 h-8 ${
                isPrime(i + 1) ? "bg-red-500" : ""
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
