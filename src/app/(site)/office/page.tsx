import { getOfficePageData } from '../../../../sanity/sanity.query';
import OfficeDesktop from '../components/office/OfficeDesktop';
import OfficeMobile from '../components/office/OfficeMobile';

export const revalidate = 60;

export default async function Page() {
  const data = await getOfficePageData();
  return (
    <>
      <OfficeDesktop data={data} />
      <OfficeMobile data={data} />
    </>
  );
}
