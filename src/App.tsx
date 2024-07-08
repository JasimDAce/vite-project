import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Tokyo", "Berlin", "Housinki", "Denver", "Nirobi"];
    const handleSelectItem = (item: string) => {
      console.log(item);
    }
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
