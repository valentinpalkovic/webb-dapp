'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { FC, useCallback, useState } from 'react';

export const Modal: FC<DialogPrimitive.DialogProps> = ({
  children,
  open,
  defaultOpen = false,
  onOpenChange: onOpenChangeProps,
  ...props
}) => {
  throw new Error('Not implemented');
};
