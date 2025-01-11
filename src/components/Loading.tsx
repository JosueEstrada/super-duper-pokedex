import React from "react";

export const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white/60 to-black/60 py-8 bg-blend-soft-light transition-all duration-1000">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
      </div>
    </div>
  );
};
