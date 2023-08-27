import { getAwardsPageData } from '../../../../../sanity/sanity.query';
import AwardList from '../../components/AwardList';

export const revalidate = 120;

export default async function Page() {
  const data = await getAwardsPageData();
  if (!data) {
    return;
  }
  const { awards } = data;
  return (
    <div className="px-4 lg:pl-[22px] lg:pr-0">
      <AwardList awards={awards} />
    </div>
  );
}
