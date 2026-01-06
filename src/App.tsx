import { ChatInterface } from './components/ChatInterface';
import './app/globals.css';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-slate-900 relative overflow-hidden">
      <div className="relative z-10 flex flex-col h-full">
        <header className="px-6 py-4 border-b border-slate-700 bg-slate-800/50">
          <h1 className="text-4xl font-bold text-white">
            Surely
          </h1>
        </header>
        <main className="flex-1 overflow-hidden w-full bg-slate-800/30 backdrop-blur-sm">
          <ChatInterface />
        </main>
      </div>
    </div>
  );
}

export default App;
