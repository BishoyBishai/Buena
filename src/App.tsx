import { Layout } from "./components/layout/Layout";
import { Button } from "./components/ui/button";

function App() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <Button>test</Button>
      </h1>
    </Layout>
  );
}

export default App;
