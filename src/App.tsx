import { DualBar } from "./charts/DualBar";
import { PieRoseType } from "./charts/PieRoseType";
import { CandlestickTouch } from "./charts/CandlestickTouch";

const App = () => {
  return (
    <div>
      <DualBar />
      <PieRoseType />
      <CandlestickTouch />
    </div>
  );
};

export default App;
