import { useCallback, useRef, useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

const INITIAL_AMOUNT = 600;
const INCREMENTAL_AMOUNT = 20;

function App() {
  const [maxNumber, setMaxNumber] = useState<number>(INITIAL_AMOUNT);
  const primeNumbers = useRef(new Set([2]));
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>();

  const fetchMoreData = () => {
    setMaxNumber((prev) => prev + INCREMENTAL_AMOUNT);
  };

  const isPrime = useCallback((num: number) => {
    if (num == 1) return true; //Edge cases
    if (primeNumbers.current.has(num)) return true;
    for (const primeNumber of primeNumbers.current)
      if (num % primeNumber === 0) return false;
    primeNumbers.current.add(num);
    return true;
  }, []);

  const hasCommonDivider = useCallback(
    (currentNumber: number, selectNumber: number | undefined) => {
      if (!selectNumber) return false;
      if (selectNumber === 1) return true; //Edge cases
      if (currentNumber === 1) return true; //Edge cases
      for (const primeNumber of primeNumbers.current)
        if (
          currentNumber % primeNumber === 0 &&
          selectNumber % primeNumber === 0
        )
          return true;
      return false;
    },
    []
  );

  const getClass = (currentNumber: number) => {
    if (hasCommonDivider(currentNumber, selectedNumber))
      return "bg-blue-500 text-white";
    if (isPrime(currentNumber)) return "bg-red-500";
    return "";
  };

  return (
    <div onMouseUp={() => setSelectedNumber(undefined)}>
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
              onMouseDown={() => setSelectedNumber(i + 1)}
              className={`border-2 w-12 h-12 flex items-center justify-center cursor-pointer ${getClass(
                i + 1
              )} `}
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
