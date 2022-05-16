import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <div className='flex'>
              <Vercel className='text-2xl' />
              <Vercel className='text-4xl' />
              <Vercel className='text-2xl' />
            </div>
            <h1 className='mt-4'>Muhajir - Front-end Developer</h1>
            <p className='mt-2 text-sm text-gray-800'>
              I am front-end developer who loves minimalism{' '}
            </p>

            <ButtonLink className='mt-6' href='/portfolio' variant='light'>
              See all portfolio
            </ButtonLink>

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
