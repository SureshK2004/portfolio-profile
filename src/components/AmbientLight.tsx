import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const AmbientLight: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* GPU-accelerated static radial background gradients (zero CPU blur computation) */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            theme === 'dark'
              ? 'radial-gradient(ellipse 70% 45% at 50% -5%, rgba(124, 58, 237, 0.18), transparent 75%), radial-gradient(ellipse 45% 45% at 95% 40%, rgba(109, 40, 217, 0.1), transparent 70%), radial-gradient(ellipse 45% 45% at 5% 85%, rgba(124, 58, 237, 0.08), transparent 70%)'
              : 'radial-gradient(ellipse 70% 45% at 50% -5%, rgba(124, 58, 237, 0.1), transparent 75%), radial-gradient(ellipse 45% 45% at 95% 40%, rgba(167, 139, 250, 0.08), transparent 70%)',
        }}
      />
    </div>
  );
};
