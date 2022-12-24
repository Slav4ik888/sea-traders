import { Town, TownName } from 'entities/town';
import { FC, useCallback, useMemo, useState } from 'react';
import { useMouse } from 'shared/lib';
import { MapTown } from 'widgets/map-town';
import { getPosition } from './get-position';
import CopyIcon from 'shared/assets/icons/copy.svg';
import s from './index.module.scss';
import { Position } from 'features/ui';



export const CoordsMaker: FC = () => {
  const
    { point, clearPoint } = useMouse(),
    [isTooltip, setIsTooltip] = useState(false);
  
  // let coords = anchorElem.getBoundingClientRect();
  
  const
    pointTown: Town = useMemo(() => {
      point && setIsTooltip(true);

      return {
        title: TownName.Havana,
        point,
        produces: [],
        highDemand: []
      }
    }, [point]);
  
  const position: Position = getPosition(point);

  const [selectedTown, setSelectedTown] = useState('');

  const code = `
  {
    title      : TownName.${selectedTown},
    point      : { X: ${point.X}, Y: ${point.Y} },
    produces   : [],
    highDemand : []
  },`;

  const handlerCopy = useCallback((e) => {
    navigator.clipboard.writeText(code);
    setIsTooltip(false);
    clearPoint();
  }, [code]);
  
  const handlerSelect = (e) => setSelectedTown(e.target.value);

    
  return (
    <>
      <MapTown town={pointTown} />

      {
        isTooltip && <div className={s.tooltip} style={position}>
          <div>Выберите название города</div>
          <form>
            <select value={selectedTown} onChange={handlerSelect}>
              {
                Object.entries(TownName).map(townName => <option
                  key={townName[0]}
                  value={townName[0]}
                >
                  {townName[1]}
                </option>)
              }
            </select>
          </form>
          <pre className={s.pre}>
            <code>
              {code}
            </code>
            <button onClick={handlerCopy} className={s.copyBtn}>
              <CopyIcon className={s.copyIcon} />
            </button>
          </pre>
      </div>
      }
    </>
  )
};
