import IssueCard from '../issue/IssueCard';
import {
  mediumSvgDrawer,
  largeSvgDrawer,
  extraSvgDrawer,
  smallSvgDrawer,
} from '../../utils/SvgDraw';
import { useEffect } from 'react';

const IssueList = ({ styles, issues }) => {
  useEffect(() => {
    const SVG_LENGTH_MEDIUM = document.getElementsByClassName('svg_medium');
    const SVG_LENGTH_LARGE = document.getElementsByClassName('svg_large');
    const SVG_LENGTH_EXTRA = document.getElementsByClassName('svg_extra');
    const SVG_LENGTH_SMALL = document.getElementsByClassName('svg_small');
    mediumSvgDrawer(SVG_LENGTH_MEDIUM);
    largeSvgDrawer(SVG_LENGTH_LARGE);
    extraSvgDrawer(SVG_LENGTH_EXTRA);
    smallSvgDrawer(SVG_LENGTH_SMALL);
  }, [issues]);
  return (
    <div className={styles.issue__list}>
      {issues &&
        issues.map((v) => {
          return (
            <IssueCard key={v.id} title={v.title} length={v.id} data={v} />
          );
        })}
      {issues &&
        issues.map((v) => {
          return (
            <IssueCard key={v.id} title={v.title} length={v.id} data={v} />
          );
        })}
    </div>
  );
};

export default IssueList;