export interface MenuLinkProps {
  id: number;
  name: string;
  path: string;
  icon?: JSX.Element;
}

export const menuLinks: MenuLinkProps[] = [
  {
    id: 1,
    name: "Uras",
    path: "/uras",
  },
  {
    id: 2,
    name: "Ramais",
    path: "/ramal",
  },
  {
    id: 2,
    name: "Áudios",
    path: "/audio",
  },
];