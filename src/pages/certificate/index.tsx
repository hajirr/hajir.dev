import { certficates } from '@/lib/certificates';

import Accent from '@/components/Accent';
import PortfolioCard from '@/components/content/PortfolioCard';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Portfolio() {
  return (
    <Layout>
      <main>
        <div className='layout p-12'>
          <UnstyledLink href='/'>
            <h1 className='text-3xl md:text-5xl' data-fade='0'>
              <Accent>Certificates</Accent>
            </h1>
          </UnstyledLink>
          <ul
            className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'
            data-fade='5'
          >
            {certficates.map((certficate) => (
              <PortfolioCard key={certficate.slug} post={certficate} />
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}
