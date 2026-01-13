import React from 'react';
import { themeClasses } from '../constants/theme';

/**
 * MetaDataList Component
 * Renders a two-column list for project metadata, matching the provided design.
 * @param {Array<{label: string, value: string}>} items
 */
function MetaDataList({ items }) {
  return (
    <ul className="w-full max-w-md mb-4">
      {items.map(({ label, value }) => (
        <li key={label} className="flex items-center mb-3">
          <span className={`${themeClasses.text.primary}  min-w-[120px] mr-6`}>{label}</span>
          <span className={`${themeClasses.text.dark} font-medium`}>{value}</span>
        </li>
      ))}
    </ul>
  );
}

export default MetaDataList;