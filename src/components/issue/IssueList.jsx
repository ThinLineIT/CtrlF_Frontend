import IssueCard from '../issue/IssueCard';
import {
  mediumSvgDrawer,
  largeSvgDrawer,
  extraSvgDrawer,
  smallSvgDrawer,
} from '../../utils/SvgDraw';
import { useEffect } from 'react';

const IssueList = ({ styles, issues, fetchMoreData, loading }) => {
  // 스크롤 기능압나다 수정 중입니다
  const infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = parseInt(document.documentElement.scrollTop);
    let clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight === scrollHeight && !loading) {
      fetchMoreData();
    }
  };

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

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  });
  return (
    <div className={styles.issue__list}>
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
          // content의 길이에 따라서 SVG Background의 길이가 달라집니다 현재는 임의 값 0으로 넣었기 때문에 추후 issue type이 추가된다면 수정하겠습니다.
        })}
    </div>
  );
};

export default IssueList;
