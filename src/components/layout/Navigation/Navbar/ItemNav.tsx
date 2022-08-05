import { Link } from "../../../../_lib/web";

interface IItemNavProps {
  text: string;
  href: string;
}

export function ItemNav({ href, text }: IItemNavProps) {
  return (
    <Link href={href} text={text} />
  );
}
