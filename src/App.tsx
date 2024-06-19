import { Provider } from "react-redux";
import { store } from "./redux/store";
import AIStrategyQuestionnaire from "./components/AIStrategyQuestionnaire";
function App() {
  return (
    <Provider store={store}>
      <div className="h-screen w-screen bg-white">
        <AIStrategyQuestionnaire />
      </div>
    </Provider>
  );
}

export default App;
