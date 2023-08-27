import { getPeoplePageData } from '../../../../../sanity/sanity.query';
import PeopleDesktop from '../../components/people/PeopleDesktop';
import PeopleMobile from '../../components/people/PeopleMobile';

export const revalidate = 120;

export default async function Page() {
  const data = await getPeoplePageData();

  if (!data) {
    return;
  }

  return (
    <>
      <PeopleDesktop data={data} />
      <PeopleMobile data={data} />
    </>
  );
}
