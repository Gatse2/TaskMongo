import './App.css';
import AddTask from './pages/AddTask';

function App() {
  return (
    <div className="App">

      <header>
        Task ToDo
      </header>
      <main>
        <section className='addTask'>
          <AddTask/>
        </section>
      </main>
    

    </div>
  );
}

export default App;
