import { useState, createElement, lazy, Suspense } from "react";

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const modules = import.meta.glob("./charts/*.tsx");

console.log("modules", modules, Object.keys(modules)[1]);

const allKeys = Object.keys(modules);

const App = () => {
  const search = window.location.search.replaceAll("?", "");
  const params = new URLSearchParams(search);
  let defaultIndex = getRandomInt(0, allKeys.length);
  if (params.get("index")) {
    try {
      defaultIndex = Number.parseInt(params.get("index")!);
      console.log("Use index from URLSearchParams", defaultIndex);
    } catch {}
  }

  const [random, setRandom] = useState(defaultIndex);
  const fileToLoad = allKeys[random];
  const component = lazy(modules[fileToLoad] as any);

  return (
    <div>
      <button onClick={() => setRandom(getRandomInt(0, allKeys.length))}>
        Random Chart
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {createElement(component)}
      </Suspense>
    </div>
  );
};

export default App;
