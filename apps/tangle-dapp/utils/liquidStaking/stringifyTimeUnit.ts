import { LsParachainSimpleTimeUnit } from '../../constants/liquidStaking/types';

const stringifyTimeUnit = (
  timeUnit: LsParachainSimpleTimeUnit,
): [number, string] => {
  const plurality = timeUnit.value === 1 ? '' : 's';

  return [timeUnit.value, `${timeUnit.unit}${plurality}`] as const;
};

export default stringifyTimeUnit;
