type PetDetailProps = {
  title: string;
  content: string;
};

export const PetDetail = ({ title, content }: PetDetailProps) => (
  <article>
    <h6 className="font-body font-medium text-fuchsia-800">{title}</h6>
    <p className="font-body">{content}</p>
  </article>
);
