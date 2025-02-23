'use client';

import { ArrowRight, GithubFill } from '@webb-tools/icons';
import Button from '@webb-tools/webb-ui-components/components/buttons/Button';
import { SocialChip } from '@webb-tools/webb-ui-components/components/SocialChip';
import { Typography } from '@webb-tools/webb-ui-components/typography/Typography';
import Image from 'next/image';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import BoostedChip from '../BoostedChip';
import useBlueprintDetails from './useBlueprintDetails';

interface BlueprintHeaderProps {
  blueprintName: string;
}

const BlueprintHeader: FC<BlueprintHeaderProps> = ({ blueprintName }) => {
  const {
    id: _,
    name,
    author,
    category,
    imgUrl,
    description,
    restakersCount,
    operatorsCount,
    tvl,
    isBoosted,
    githubUrl,
    websiteUrl,
    twitterUrl,
    email,
  } = useBlueprintDetails(blueprintName);

  return (
    <div
      className={twMerge(
        'relative overflow-hidden rounded-xl space-y-3',
        'shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] dark:shadow-[0px_4px_8px_0px_rgba(0,0,0,0.20)]',
        'bg-[linear-gradient(180deg,rgba(184,196,255,0.20)0%,rgba(236,239,255,0.20)100%),linear-gradient(180deg,rgba(255,255,255,0.50)0%,rgba(255,255,255,0.30)100%)]',
        'dark:bg-[linear-gradient(180deg,rgba(17,22,50,0.20)0%,rgba(21,37,117,0.20)100%),linear-gradient(180deg,rgba(43,47,64,0.50)0%,rgba(43,47,64,0.30)100%)]',
        'before:absolute before:inset-0 before:bg-cover before:bg-no-repeat before:opacity-30 before:pointer-events-none',
        "before:bg-[url('/static/assets/blueprints/grid-bg.png')] dark:before:bg-[url('/static/assets/blueprints/grid-bg-dark.png')]",
      )}
    >
      {isBoosted && (
        <div
          className={twMerge(
            'h-2 bg-[linear-gradient(to_right,hsla(230,64%,52%,0.8)0%,hsla(230,87%,74%,0.8)40%,hsla(242,100%,93%,0.8)100%)]',
            'dark:bg-[linear-gradient(to_right,hsla(231,49%,13%,0.8)0%,hsla(242,67%,55%,0.8)40%,hsla(242,93%,65%,0.8)100%)]',
          )}
        />
      )}

      <div className="px-8 py-6 space-y-4">
        <div className="pb-4 flex flex-col md:flex-row gap-4 border-b border-mono-60 dark:border-mono-160">
          <div className="flex-1 flex gap-3">
            <div className="flex gap-3">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={imgUrl}
                  width={80}
                  height={80}
                  alt={name}
                  className="aspect-square bg-center"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-1">
                  <Typography variant="h4" fw="bold">
                    {name}
                  </Typography>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubFill
                      size="lg"
                      className="!fill-mono-200 dark:!fill-mono-0 hover:!fill-mono-120 dark:hover:!fill-mono-80"
                    />
                  </a>
                  {isBoosted && <BoostedChip />}
                </div>
                <div className="flex items-center">
                  <Typography
                    variant="body2"
                    className="line-clamp-1 text-mono-120 dark:text-mono-100"
                  >
                    {author}
                  </Typography>
                  {/* TODO: to add link here */}
                  {/* <ExternalLinkIcon href /> */}
                </div>
              </div>
              <Button
                rightIcon={<ArrowRight size="lg" className="!fill-mono-0" />}
              >
                Deploy
              </Button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between md:items-end gap-3">
            <Typography
              variant="body1"
              className="line-clamp-3 text-mono-120 dark:text-mono-100 group-hover:text-mono-200 dark:group-hover:text-mono-0"
            >
              {description}
            </Typography>
            <div className="flex items-center gap-2">
              {websiteUrl && <SocialChip href={websiteUrl} type="website" />}
              {twitterUrl && <SocialChip href={twitterUrl} type="twitter" />}
              {email && <SocialChip href={`mailto:${email}`} type="email" />}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:!grid-cols-4 gap-4">
          <StatsItem label="Total Operators" value={operatorsCount} />
          <StatsItem label="Total Restakers" value={restakersCount} />
          <StatsItem label="Total Value Locked" value={tvl} />
          <StatsItem label="Category" value={category} />
        </div>
      </div>
    </div>
  );
};

export default BlueprintHeader;

interface StatsItemProps {
  label: string;
  value: string | number;
}

const StatsItem: FC<StatsItemProps> = ({ label, value }) => {
  return (
    <div className="space-y-2">
      <Typography
        variant="h5"
        fw="normal"
        className="text-mono-120 dark:text-mono-100"
      >
        {label}
      </Typography>
      <Typography variant="h4" fw="bold">
        {value}
      </Typography>
    </div>
  );
};
