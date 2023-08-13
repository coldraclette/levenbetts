interface AwardListItemProps {
  award: AwardProps[];
}

interface AwardProps {
  _key: string;
  award: string;
}

export default function AwardListItem({ award }: AwardListItemProps) {
  return (
    <>
      {award.map((award: AwardProps) => {
        return (
          <li key={award._key}>
            <p className="pl-4 -indent-4">{award.award}</p>
          </li>
        );
      })}
    </>
  );
}
