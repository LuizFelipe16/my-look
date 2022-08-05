import { Link } from "../../../../_lib/web";

interface IItemSidebarNavProps {
  text: string;
  href: string;
}

export function ItemSidebarNav({ href, text }: IItemSidebarNavProps) {
  return (
    <Link href={href} text={text} />
  );
}