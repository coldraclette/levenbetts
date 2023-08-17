import { getProjectListData } from '../../../../../sanity/sanity.query';
import StatusList from '../../components/StatusList';

export const revalidate = 120;

export default async function Page() {
  const data = await getProjectListData();
  if (!data) return;

  return (
    <div className="px-4 md:px-[22px]">
      <StatusList projects={data} />
    </div>
  );
}
