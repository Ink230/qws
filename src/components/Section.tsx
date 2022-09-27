import { ReactNode } from 'react';
import sections from '../styles/Sections.module.css';

type Props = {
  children?: ReactNode;
  reverse?: boolean;
  lessGap?: boolean;
  final?: boolean;
};
export const Section: React.FC<Props> = ({
  children,
  reverse,
  lessGap,
  final,
}: Props) => {
  const sectionBaseContainer = lessGap
    ? sections.containergapless
    : sections.container;

  const sectionChild = reverse ? sections.childreverse : sections.child;

  const sectionContainer = reverse
    ? sections.sectioncontainerreverse
    : sections.sectioncontainer;

  const sectionChildEnd = reverse
    ? sections.childendreverse
    : sections.childend;

  const finalClass = final ? sections.final : '';

  const sectionChildEndOutline = reverse
    ? sections.childoutlineendreverse
    : sections.childoutlineend;

  return (
    <>
      <div className={sectionBaseContainer}>
        <div className={sectionChild}>
          <div className={sections.childoutline}></div>
        </div>
      </div>
      <div className={sectionContainer}>
        {children}
        <div className={sections.containerend}>
          <div className={[sectionChildEnd, finalClass].join(' ')}>
            <div className={sectionChildEndOutline}></div>
          </div>
        </div>
      </div>
    </>
  );
};
