import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface TabsProps {
  data: string[];
  activeTabIndex: number;
  onChange: Dispatch<SetStateAction<number>>;
}

const Tabs: FC<TabsProps> = ({ data, activeTabIndex, onChange }) => {
  return (
    <ul className="producttabs">
      {data.map((tab, index) => (
        <li key={`${tab}-${index}`}>
          <Link
            to=""
            onClick={() => onChange(index)}
            className={index === activeTabIndex ? "active" : ""}
          >
            {tab}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
