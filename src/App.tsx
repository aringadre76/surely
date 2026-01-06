import { ChatInterface } from './components/ChatInterface';
import GlassSurface from './components/GlassSurface';
import DarkVeil from './components/DarkVeil';
import './app/globals.css';
import './components/DarkVeil.css';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-slate-900 relative overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-40">
        <DarkVeil speed={0.1} noiseIntensity={0} scanlineIntensity={0} />
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <header className="px-6 py-4 border-b border-slate-700 bg-slate-800/50">
          <h1 className="text-4xl font-bold text-white">
            Surely
          </h1>
        </header>
        <main className="flex-1 overflow-hidden w-full">
          <GlassSurface
            width="100%"
            height="100%"
            borderRadius={0}
            backgroundOpacity={0.1}
            blur={10}
            brightness={1.2}
          >
            <ChatInterface />
          </GlassSurface>
        </main>
      </div>
    </div>
  );
}

export default App;
