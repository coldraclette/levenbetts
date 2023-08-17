interface HeadingProps {
  title: string;
  subtitle?: string;
  headerRef?: React.RefObject<HTMLDivElement>;
  onHeaderClicked?: () => void;
}

export default function Heading({
  title,
  subtitle,
  onHeaderClicked,
}: HeadingProps) {
  return (
    <div onClick={onHeaderClicked}>
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
}
