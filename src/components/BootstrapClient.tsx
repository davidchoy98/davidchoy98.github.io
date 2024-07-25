"use client"

import { FC, useEffect } from 'react';

export const BootstrapClient: FC = (): null => {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}