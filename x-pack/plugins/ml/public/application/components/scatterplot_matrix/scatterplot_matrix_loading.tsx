/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';

import { EuiLoadingSpinner, EuiSpacer, EuiText } from '@elastic/eui';

export const ScatterplotMatrixLoading = () => {
  return (
    <EuiText textAlign="center">
      <EuiSpacer size="l" />
      <EuiLoadingSpinner size="l" />
      <EuiSpacer size="l" />
    </EuiText>
  );
};
