import { getResearchPageData } from '../../../../../sanity/sanity.query';
import ResearchDesktop from '../../components/research/ResearchDesktop';

export default async function Page() {
  const data = await getResearchPageData();

  return (
    <>
      <ResearchDesktop data={data} />
    </>
  );
}
