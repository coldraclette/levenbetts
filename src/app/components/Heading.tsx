interface HeadingProps {
  title: string;
  subtitle?: string;
}

export default function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div>
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
}
