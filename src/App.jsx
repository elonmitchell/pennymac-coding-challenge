import { QueryClient, QueryClientProvider } from "react-query";
import { RandomQuotePage } from "./components/RandomQuotePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RandomQuotePage />
    </QueryClientProvider>
  );
}

export default App;
