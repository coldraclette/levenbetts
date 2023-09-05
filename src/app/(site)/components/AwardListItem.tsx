interface AwardListItemProps {
  award: AwardProps[];
}

interface AwardProps {
  _key: string;
  award: string;
}

export default function AwardListItem({ award }: AwardListItemProps) {
  function addNonBreakingSpaces(text: string) {
    const words = text.split(' ');
    const newText = [];

    for (let i = 0; i < words.length; i++) {
      if (i !== words.length - 1 && i !== words.length - 2) {
        newText.push(words[i]);
        newText.push(' ');
      } else {
        newText.push(words[i]);
        newText.push('&nbsp;');
      }
    }

    newText.pop();

    return newText.join('');
  }
  return (
    <>
      {award.map((award: AwardProps) => {
        const processedAward = addNonBreakingSpaces(award.award);
        return (
          <li key={award._key}>
            <p className="pl-4 -indent-4">
              <span dangerouslySetInnerHTML={{ __html: processedAward }} />
            </p>
          </li>
        );
      })}
    </>
  );
}
