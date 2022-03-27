import './index.css'
function Display({event, timer}) {
  return ( 
  <div data-testid='display' className='countdown__display'>
    {event && <div>
      <div data-testid='display__name'>
        <p>Nome do evento: 
          <span> {event.name}</span>
        </p>
      </div>
      <div data-testid='display__datetime'>
        <p>Data do evento: 
          <span> {event.datetime}</span>
        </p>
      </div>
    </div>}
    <small>Tempo restante para o evento </small>
    <h3 data-testid='display__timer'> {timer}</h3>
  </div> );
}

export default Display;