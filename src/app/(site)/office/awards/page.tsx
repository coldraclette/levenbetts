import { getAwardsPageData } from '../../../../../sanity/sanity.query';
import AwardList from '../../components/AwardList';

export default async function Page() {
  const data = await getAwardsPageData();
  if (!data) {
    return;
  }
  const { awards } = data;
  return (
    <div className="px-4 md:px-[22px]">
      <AwardList awards={awards} />
    </div>
  );
}
