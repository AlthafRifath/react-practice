import List from "./List";

function App() {

  const fruits = [{id: 1, name:'apple', calories:95},
                    {id: 2, name:'banana', calories:105},
                    {id: 3, name:'cherry', calories:90},
                    {id: 4, name:'date', calories:120},
                    {id: 5, name:'fig', calories:50},
                    {id: 6, name:'grape', calories:65},];

  const vegetables = [{id: 1, name:'apple', calories:95},
                    {id: 2, name:'banana', calories:105},
                    {id: 3, name:'cherry', calories:90},
                    {id: 4, name:'date', calories:120},
                    {id: 5, name:'fig', calories:50},
                    {id: 6, name:'grape', calories:65},];
  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
    </>
  );
}

export default App;
