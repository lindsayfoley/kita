import React from "react";
import { IconListItem } from "@kita/components/atoms/IconListItem";
import { IconListItemProps } from "@kita/components/atoms/IconListItem/IconListItem";

export interface IconListGroupProps {
  list: IconListItemProps[];
}

const IconListGroup = ({ list }: IconListGroupProps) => {
  if (list.length === 0) {
    console.warn("Warning: list is empty.");
    return null;
  }

  return (
    <ul>
      {list.map((item) => (
        <li key={item.text}>
          <IconListItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default IconListGroup;
