import React from "react";

export const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
    </div>
  );
};
