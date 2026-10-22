interface ValidateNoteProps {
  text: string;
}

export default function ValidateNote({ text }: ValidateNoteProps) {
  return (
    <p className="validate-note">
      {text}
    </p>
  );
}
