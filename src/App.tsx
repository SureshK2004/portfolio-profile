import { Loader } from './components/Loader/Loader';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer/Footer';
import { Chatbot } from './components/Chatbot/Chatbot';
import { ThemeProvider } from './context/ThemeContext';
import { AmbientLight } from './components/AmbientLight';

export function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        {/* Subtle Ambient Lighting Spotlights */}
        <AmbientLight />

        {/* Initial load transition */}
        <Loader />

        {/* Sticky Navigation with Light/Dark Mode Switch */}
        <Navbar />

        {/* Main Single-Page Engineering Story */}
        <Home />

        {/* Minimal Footer */}
        <Footer />

        {/* Frontend-only AI Assistant */}
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;
