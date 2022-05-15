import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import { BlogFrontmatter } from '@/types/frontmatters';

type PortfolioCardProps = {
  post: BlogFrontmatter;
  checkTagged?: (tag: string) => boolean;
} & React.ComponentPropsWithoutRef<'li'>;

export default function BlogCard({
  post,
  className,
  onClick,
}: PortfolioCardProps) {
  return (
    <li
      className={clsx(
        'w-full rounded-md border border-gray-300 bg-white ',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
      onClick={onClick}
    >
      <UnstyledLink
        className='block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
        href={`https://${post.slug}`}
      >
        <div className='relative'>
          <Image
            src={post.banner}
            width={1200}
            height={(1200 * 2) / 5}
            alt='project'
            className='rounded'
            layout='responsive'
          />
        </div>
        <div className='p-4'>
          <h4 className='text-gray-800'>{post.title}</h4>
          <p className='text-sm text-gray-700 '>{post.description}</p>
        </div>
      </UnstyledLink>
    </li>
  );
}
