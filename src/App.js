import Form from './container/Form';

function App() {
  return (
    <div>
      <header>
        <h1 data-testid="section__title">
          Contagem regressiva do evento
        </h1>
      </header>
      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
