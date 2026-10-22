interface PageHeaderProps {
  kicker?: string;
  title: string;
  lede: string;
}

export default function PageHeader({ kicker = 'Overview', title, lede }: PageHeaderProps) {
  return (
    <header className="page-header">
      <p className="page-kicker">{kicker}</p>
      <h1>{title}</h1>
      <p className="page-lede">{lede}</p>
    </header>
  );
}
