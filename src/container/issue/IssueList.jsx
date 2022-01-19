import IssueCard from '../issue/IssueCard';
import {
  mediumSvgDrawer,
  largeSvgDrawer,
  extraSvgDrawer,
  smallSvgDrawer,
} from '../../utils/SvgDraw';
import { useEffect, useState } from 'react';

const IssueList = ({ styles, issues, fetchMoreData, loading }) => {
  const [target, setTarget] = useState('');

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !loading) {
      observer.unobserve(entry.target);
      await fetchMoreData();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

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
    <>
      <div id="issue__list" className={styles.issue__list}>
        {issues &&
          issues.map((v, i) => {
            return (
              <IssueCard
                key={v.id}
                title={v.title}
                length={v.reason.length}
                data={v}
              />
            );
          })}
      </div>
      {!loading && <div ref={setTarget}>끝!</div>}
    </>
  );
};

export default IssueList;
