import Link from 'next/link';
import { useMemo } from 'react';
import './CourseGrid.css';

const CourseGrid = ({
  completed,
  light = false,
}: {
  completed: string[];
  light?: boolean;
}) => {
  const { items } = useMemo(() => {
    const grid = [
      [
        ['101M', '100 SERIES', '101'],
        ['101/201M', '200 SERIES', '101-201'],
        ['202M', '200 SERIES', '202'],
        ['301M', '300 SERIES', '301'],
        ['302M', '300 SERIES', '302'],
      ],
      [
        null,
        null,
        ['MFF', 'SUPPORT', 'mff'],
        ['T&B', 'SUPPORT', 'tandem-bundle'],
        ['CUSTOM', 'SUPPORT', 'custom-courses'],
      ],
    ];

    const transformItem = (
      item: [string, string, string] | null
    ): { name: string; type: string; slug: string } | null => {
      if (!item) return null;
      const [name, type, slug] = item;
      return { name, type, slug };
    };

    const items = grid
      .map((row) =>
        row.map((item) =>
          transformItem(item as [string, string, string] | null)
        )
      )
      .flat();

    return { grid, items };
  }, []);

  // Check if the item is completed
  const isCompleted = (
    item: { name: string; type: string; slug: string } | null
  ): boolean => {
    return item ? completed.includes(item.name) : false;
  };

  return (
    <div className={`main py-16 ${light ? 'light' : ''}`}>
      <div className="container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${!item ? 'invisible' : ''} ${isCompleted(item) ? 'isCompleted' : ''} ${
              light ? 'lightColor' : 'darkColor'
            }`}
          >
            {item && !(item.type == 'SUPPORT') ? (
              <Link href={`/military/courses/${item.slug}`}>
                <div className="content">
                  <div className="name">{item.name}</div>
                  <hr />
                  <div className="desc">{item.type}</div>
                </div>
              </Link>
            ) : (
              item && (
                <Link
                  href={`/military/courses/supporting-courses/${item.slug}`}
                >
                  <div className="content">
                    <div className="name">{item.name}</div>
                    <hr />
                    <div className="desc">{item.type}</div>
                  </div>
                </Link>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
