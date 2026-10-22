interface TermProps {
  term: string;
  definition: string;
}

export default function Term({ term, definition }: TermProps) {
  return (
    <abbr className="term" tabIndex={0} title={definition}>
      {term}
      <span className="term-tip" role="tooltip">
        {definition}
      </span>
    </abbr>
  );
}
