import { getResearchPageData } from '../../../../../sanity/sanity.query';
import ResearchDesktop from '../../components/representation/ResearchDesktop';
import ResearchMobile from '../../components/representation/ResearchMobile';

export const revalidate = 60;

export default async function Page() {
  const data = await getResearchPageData();

  return (
    <>
      <ResearchDesktop data={data} />
      <ResearchMobile data={data} />
    </>
  );
}
