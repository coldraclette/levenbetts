import Link from 'next/link';

interface StatusListProps {
  projects: any;
}

export default function StatusList({ projects }: StatusListProps) {
  return (
    <div className="flex overflow-x-auto">
      <div
        className="w-max max-w-[615px] p-4"
        style={{
          columnWidth: '615px',
          columnGap: '1rem',
          height: '90vh',
        }}
      >
        <h2>Current</h2>
        {projects.current.map(
          ({ _key, slug, title, subtitle, category }: any) => {
            return (
              <div key={_key} className="inline-block">
                <Link
                  href={`/work/${category.title}/${slug.current}`}
                  className="mr-40 break-inside-avoid"
                >
                  {title} {subtitle && `, ${subtitle}`}
                </Link>
              </div>
            );
          }
        )}
      </div>

      <div
        className="w-max max-w-[615px] p-4"
        style={{
          columnWidth: '615px',
          columnGap: '1rem',
          height: '90vh',
        }}
      >
        <h2>Complete</h2>
        {projects.complete.map(
          ({ _key, slug, title, subtitle, category }: any) => {
            return (
              <div key={_key} className="inline-block">
                <Link
                  href={`/work/${category.title}/${slug.current}`}
                  className="mr-40 break-inside-avoid"
                >
                  {title} {subtitle && `, ${subtitle}`}
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
