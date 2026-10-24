// src/components/Loader.tsx
import React, { useEffect, useState } from 'react';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [lines, setLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prev => {
        if (prev < 5) return prev + 1;
        clearInterval(interval);
        setTimeout(onComplete, 1000);
        return prev;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div id="loader">
      <div className="qa-loader">
        <div className="qa-loader-header">
          <span className="qa-dot qa-dot-red"></span>
          <span className="qa-dot qa-dot-yellow"></span>
          <span className="qa-dot qa-dot-green"></span>
          <span className="qa-loader-title">tharushi@portfolio: ~/playwright-e2e</span>
        </div>
        <div className="qa-loader-body">
          <div className="qa-line qa-line-cmd"><span className="qa-prompt">$</span> npx playwright test</div>
          <div className="qa-line qa-line-info">Running 5 tests...</div>
          
          {lines >= 1 && <div className="qa-line qa-test-line"><span className="qa-check">✓</span> TC_LOGIN_001 — Login</div>}
          {lines >= 2 && <div className="qa-line qa-test-line"><span className="qa-check">✓</span> TC_INV_002 — Add item</div>}
          {lines >= 3 && <div className="qa-line qa-test-line"><span className="qa-check">✓</span> TC_CART_001 — Cart items</div>}
          {lines >= 4 && <div className="qa-line qa-test-line"><span className="qa-check">✓</span> TC_CHECKOUT_001 — Checkout</div>}
          {lines >= 5 && <div className="qa-line qa-test-line"><span className="qa-check">✓</span> TC_NEG_006 — XSS Sanitized</div>}
          
          {lines === 5 && <div className="qa-line qa-line-final is-ready">→ Portfolio ready. Launching...</div>}
        </div>
      </div>
    </div>
  );
};

export default Loader;