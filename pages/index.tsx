import { useEffect, useState } from 'react';

import Link from 'next/link';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home: NextPage = () => {

  const { t } = useTranslation("common");

  return (
    <>
      <h1>
        {t('hello')}
      </h1>
      {/* <Image src="/test.svg" height={100} width={100} alt="An SVG of an eye"/>
      <Illustration height={100} width={100} alt="An SVG of an eye"/> */}
      <Link href={"/about"}>
        <a>About</a>
      </Link>
      <br />
      <Link href={"/shop"}>
        <a>Shop</a>
      </Link>
    </>
  )
}

export default Home;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
