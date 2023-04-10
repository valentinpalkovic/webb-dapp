import { RecipientInput } from '@webb-tools/webb-ui-components';
import { useObservableState } from 'observable-hooks';
import { ComponentProps, useEffect, useMemo } from 'react';
import { map } from 'rxjs';

import { useFaucetContext } from '../provider';

const overrideInputProps: ComponentProps<
  typeof RecipientInput
>['overrideInputProps'] = {
  isReadOnly: true,
  placeholder: '0x000000000000000000000000000000',
};

const ContractAddressInput = () => {
  const { config, inputValues$, twitterHandle$ } = useFaucetContext();

  const twitterHandle = useObservableState(twitterHandle$);

  const selectedChain = useObservableState(
    inputValues$.pipe(map((inputValues) => inputValues.chain))
  );

  const selectedToken = useObservableState(
    inputValues$.pipe(map((inputValues) => inputValues.token))
  );

  const contractAddress = useMemo(() => {
    // If not authenticated, return undefined
    if (!twitterHandle) {
      return undefined;
    }

    if (!selectedChain || !selectedToken || !config[selectedChain]) {
      return undefined;
    }
    return config[selectedChain][selectedToken];
  }, [config, selectedChain, selectedToken, twitterHandle]);

  const inputProps = useMemo(
    () => ({ ...overrideInputProps, isDisabled: !twitterHandle }),
    [twitterHandle]
  );

  // Side effect to update the contract address value
  useEffect(() => {
    const inputValues = inputValues$.getValue();
    inputValues$.next({
      ...inputValues,
      contractAddress,
    });
  }, [contractAddress, inputValues$]);

  return (
    <div className="space-x-2">
      <RecipientInput
        isHiddenPasteBtn
        className="max-w-none input-height"
        value={contractAddress}
        title="Address"
        overrideInputProps={inputProps}
      />
    </div>
  );
};

export default ContractAddressInput;