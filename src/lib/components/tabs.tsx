import { Children, Dispatch, FC, SetStateAction, useMemo } from "react";
import { Link } from "react-router-dom";

interface TabsProps {
  data: string[];
  activeTabIndex: number;
  onChange: Dispatch<SetStateAction<number>>;
  children: React.ReactNode;
}

const Tabs: FC<TabsProps> = ({ data, activeTabIndex, onChange, children }) => {
  const tabChild = useMemo(
    () =>
      Children.map(children, (child, index) =>
        activeTabIndex === index ? child : null
      ),
    [activeTabIndex, children]
  );

  return (
    <>
      <ul className="producttabs">
        {data.map((tab, index) => (
          <li key={`${tab}-${index}`}>
            <Link
              to=""
              onClick={() => onChange(index)}
              className={index === activeTabIndex ? "active fs-6" : "fs-6"}
            >
              {tab}
            </Link>
          </li>
        ))}
      </ul>
      <div className="tab-content text-center">{tabChild}</div>
    </>
  );
};

export default Tabs;
