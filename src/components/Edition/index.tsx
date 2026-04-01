import React from 'react';

type EditionType = 'enterprise' | 'dms';

const labels: Record<EditionType, string> = {
  enterprise: '企业版',
  dms: 'DMS',
};

export default function Edition({ type }: { type: EditionType }): JSX.Element {
  return (
    <span className={`edition-badge edition-badge--${type}`}>
      {labels[type]}
    </span>
  );
}
