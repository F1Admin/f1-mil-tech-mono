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
        ['101M', 100],
        ['101/201M', 200],
        ['301M', 300],
        ['ENV', 400],
        ['MFF', 'SUP'],
      ],
      [null, ['202M', 200], ['302M', 300], ['CUS', 400], ['T&B', 'SUP']],
    ];

    const transformItem = (
      item: [string, number] | null
    ): { name: string; type: number } | null => {
      if (!item) return null;
      const [name, type] = item;
      return { name, type };
    };

    const items = grid
      .map((row) =>
        row.map((item) => transformItem(item as [string, number] | null))
      )
      .flat();

    return { grid, items };
  }, []);

  // Check if the item is completed
  const isCompleted = (
    item: { name: string; type: number } | null
  ): boolean => {
    return item ? completed.includes(item.name) : false;
  };

  return (
    <div className={`main py-10 ${light ? 'light' : ''}`}>
      <div className="container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${!item ? 'invisible' : ''} ${isCompleted(item) ? 'isCompleted' : ''} ${
              light ? 'lightColor' : 'darkColor'
            }`}
          >
            {item && (
              <Link href={`/miltary/courses/${item.name}`}>
                <div className="content">
                  <div className="name">{item.name}</div>
                  <hr />
                  <div className="desc">{item.type} SERIES</div>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
