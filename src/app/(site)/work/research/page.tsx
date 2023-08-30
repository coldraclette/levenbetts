import { getResearchPageData } from '../../../../../sanity/sanity.query';
import ResearchDesktop from '../../components/research/ResearchDesktop';
import ResearchMobile from '../../components/research/ResearchMobile';

export default async function Page() {
  const data = await getResearchPageData();

  return (
    <>
      <ResearchDesktop data={data} />
      <ResearchMobile data={data} />
    </>
  );
}
