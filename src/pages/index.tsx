import * as React from 'react';

import { myskills } from '@/lib/myskills';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <div className='flex'>
              {myskills.map((item) => (
                <NextImage
                  useSkeleton
                  width={30}
                  height={30}
                  src={item}
                  key={item}
                  alt='language'
                />
              ))}
            </div>
            <h1 className='mt-10'>
              Muhajir - <Accent>Front-end Developer</Accent>
            </h1>
            <p className='mt-2 text-sm text-gray-800'>
              I am front-end developer who loves minimalism{' '}
            </p>
            <div className='mt-6 flex space-x-3'>
              <ButtonLink href='/portfolio' variant='light'>
                See all portfolios
              </ButtonLink>
              <ButtonLink href='/certificate' variant='light'>
                See all certificates
              </ButtonLink>
            </div>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://instagram.com/muhajir.apk'>
                Muhajir
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
