import IssueCard from '../issue/IssueCard';
import { useEffect } from 'react';

const IssueList = ({ styles, issues }) => {
  useEffect(() => {
    const SVG_LENGTH1 = document.getElementsByClassName('test1');
    const SVG_LENGTH2 = document.getElementsByClassName('test2');
    const SVG_LENGTH3 = document.getElementsByClassName('test3');
    const SVG_LENGTH4 = document.getElementsByClassName('test4');
    if (SVG_LENGTH1.length != 0) {
      for (let x of SVG_LENGTH1) {
        x.setAttribute('viewBox', '0 0 282 320');
        const polygon1 = x.getElementsByTagName('polygon');
        const polyline1 = x.getElementsByTagName('polyline');
        polygon1[0].setAttribute(
          'points',
          '0 0 0 319 259 319 259 296 282 296 282 0 0 0'
        );
        polygon1[1].setAttribute(
          'points',
          '0 0 0 319 259 319 259 296 282 296 282 0 0 0'
        );
        polyline1[0].setAttribute('points', '259 319 259 296 282 296');
      }
    }
    if (SVG_LENGTH2.length != 0) {
      for (let x of SVG_LENGTH2) {
        x.setAttribute('viewBox', '0 0 282 440');
        const polygon2 = x.getElementsByTagName('polygon');
        const polyline2 = x.getElementsByTagName('polyline');
        polygon2[0].setAttribute(
          'points',
          '0 0 0 432 259 432 259 409 282 409 282 0 0 0'
        );
        polygon2[1].setAttribute(
          'points',
          '0 0 0 432 259 432 259 409 282 409 282 0 0 0'
        );
        polyline2[0].setAttribute('points', '259 432 259 409 282 409');
      }
    }
    if (SVG_LENGTH3.length != 0) {
      for (let x of SVG_LENGTH3) {
        x.setAttribute('viewBox', '0 0 282 550');
        const polygon3 = x.getElementsByTagName('polygon');
        const polyline3 = x.getElementsByTagName('polyline');
        polygon3[0].setAttribute(
          'points',
          '0 0 0 544 259 544 259 521 282 521 282 0 0 0'
        );
        polygon3[1].setAttribute(
          'points',
          '0 0 0 544 259 544 259 521 282 521 282 0 0 0'
        );
        polyline3[0].setAttribute('points', '259 544 259 521 282 521');
      }
    }
    if (SVG_LENGTH4.length != 0) {
      for (let x of SVG_LENGTH4) {
        x.setAttribute('viewBox', '0 0 282 220');
        const polygon4 = x.getElementsByTagName('polygon');
        const polyline4 = x.getElementsByTagName('polyline');
        polygon4[0].setAttribute(
          'points',
          '0 0 0 207 259 207 259 184 282 184 282 0 0 0'
        );
        polygon4[1].setAttribute(
          'points',
          '0 0 0 207 259 207 259 184 282 184 282 0 0 0'
        );
        polyline4[0].setAttribute('points', '259 207 259 184 282 184');
      }
    }
  }, [issues]);
  return (
    <div className={styles.issue__list}>
      {issues &&
        issues.map((v) => {
          return <IssueCard key={v.id} title={v.title} length={v.id} data={v} />;
        })}
      {issues &&
        issues.map((v) => {
          return <IssueCard key={v.id} title={v.title} length={v.id} data={v} />;
        })}
    </div>
  );
};

export default IssueList;
