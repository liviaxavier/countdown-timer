function Form() {
  return (
        <form>
          <label 
          htmlFor='event-name' 
          data-testid="event-name__label">
            Nome
            <input 
              required
              data-testid="event-name__input" 
              type="text" 
              name='event-name' 
              id="event-name"/>

          </label>
          <label 
          htmlFor='event-date' 
          data-testid="event-date__label">
            Data
            <input 
              required
              data-testid="event-date__input" 
              type="date" 
              name='event-date' 
              id="event-date"/>
          </label>
          <label 
          htmlFor='event-time' 
          data-testid="event-time__label">
            Hora
            <input 
              data-testid="event-time__input" 
              type="time" 
              name='event-time' 
              id="event-time"/>
          </label>
        </form>
  );
}

export default Form;
