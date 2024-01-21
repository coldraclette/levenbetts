import { getProjectListData } from '../../../../../sanity/sanity.query';
import StatusList from '../../components/StatusList';

export const revalidate = 60;

export default async function Page() {
  const data = await getProjectListData();
  if (!data) return;
  return (
    <div className="h-full px-4 pt-11 lg:px-[22px] lg:pt-0">
      <StatusList projects={data} />
    </div>
  );
}
