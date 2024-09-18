// Switcher.js
import React from 'react';

export default function Switcher({ label, isChecked, onToggle, className }) {
  return (
    <div className="switch-row">
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onToggle}
          className={className}
        />
        <span className={`slider ${className}`}></span>
      </label>
      <label className="switch-label">{label}</label>
    </div>
  );
};
