import React, { useEffect } from 'react';
import { EGContextProps } from '../../typings/Components';
import s from './EGContext.less';

const EGContext: React.FC<EGContextProps> = ({ nodes, edges, options, children }) => {
  useEffect(() => {
    const box = document.getElementsByClassName(`${s.EGContext}`) as any;
    box[0].addEventListener('mousedown', (e: any) => {
      const disX = e.pageX - box[0].offsetLeft;
      const disY = e.pageY - box[0].offsetTop;

      const move = (e: any) => {
        box[0].style.left = e.pageX - disX + 'px';
        box[0].style.top = e.pageY - disY + 'px';
        console.log(box[0].style.left, box[0].style.top);
      };

      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move);
      });
    });
    return () => {
      box[0].addEventListener('mousedown');
    };
  }, []);

  return (
    //todo: 给这个div加上缩放，移动能力
    // 不知道为什么，拖拽起来特别卡
    <div className={s.EGContext}>{children}</div>
  );
};

export default EGContext;
