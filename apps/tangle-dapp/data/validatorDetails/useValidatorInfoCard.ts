'use client';

import { useEffect, useMemo, useState } from 'react';

import useRestakingRoleLedger from '../../data/restaking/useRestakingRoleLedger';
import useCurrentEra from '../../data/staking/useCurrentEra';
import { getAccountInfo, getPolkadotApiPromise } from '../../utils/polkadot';
import {
  getProfileTypeFromRestakeRoleLedger,
  getTotalRestakedFromRestakeRoleLedger,
} from '../../utils/polkadot/restake';

export default function useValidatorInfoCard(
  rpcEndpoint: string,
  validatorAddress: string
) {
  const { data: currentEra } = useCurrentEra();
  const { data: ledgerOpt, isLoading: isLoadingLedgerOpt } =
    useRestakingRoleLedger(validatorAddress);

  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [web, setWeb] = useState<string | null>(null);
  const [twitter, setTwitter] = useState<string | null>(null);
  const [nominations, setNominations] = useState<number | null>(null);
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const restakingMethod = useMemo(
    () => getProfileTypeFromRestakeRoleLedger(ledgerOpt),
    [ledgerOpt]
  );

  const totalRestaked = useMemo(
    () => getTotalRestakedFromRestakeRoleLedger(ledgerOpt),
    [ledgerOpt]
  );

  useEffect(() => {
    const fetchData = async () => {
      const fetchNameAndSocials = async () => {
        const validatorAccountInfo = await getAccountInfo(
          rpcEndpoint,
          validatorAddress
        );
        if (validatorAccountInfo) {
          setName(validatorAccountInfo.name);
          setEmail(validatorAccountInfo.email);
          setWeb(validatorAccountInfo.web);
          setTwitter(validatorAccountInfo.twitter);
        }
      };

      const fetchNominations = async () => {
        const api = await getPolkadotApiPromise(rpcEndpoint);
        if (currentEra === null || !api.query.staking?.erasStakersOverview) {
          setNominations(null);
          setIsActive(null);
          return;
        }

        const erasStakersOverviewData =
          await api.query.staking.erasStakersOverview(
            currentEra,
            validatorAddress
          );
        if (erasStakersOverviewData.isSome) {
          const nominatorCount =
            erasStakersOverviewData.unwrap().nominatorCount;
          setNominations(nominatorCount.toNumber());
          setIsActive(true);
          return;
        }

        setNominations(null);
        setIsActive(false);
      };

      await Promise.all([fetchNameAndSocials(), fetchNominations()]);
      setIsLoading(false);
    };

    fetchData();
  }, [validatorAddress, rpcEndpoint, currentEra]);

  return {
    name,
    isActive,
    totalRestaked,
    restakingMethod,
    nominations,
    twitter,
    email,
    web,
    isLoading: isLoading || isLoadingLedgerOpt,
  };
}
