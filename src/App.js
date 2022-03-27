import { useState } from 'react';
import Display from './container/Display';
import Form from './container/Form';

function App() {
  const [formValues, setFormValues] = useState()
  return (
    <div>
      <main>
        <h1 data-testid="section__title">
          Contagem regressiva do evento
        </h1>
        {formValues && <Display event={formValues} />}
        <Form onSubmit={setFormValues} />
      </main>
    </div>
  );
}

export default App;
