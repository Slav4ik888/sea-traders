import { FC, memo, useCallback, useMemo } from 'react';
import { Town, TownName, useTowns } from 'entities/towns';
import { ShipOnMap } from 'entities/ships/ui/ship-on-map';
import { Ship } from 'entities/ships';
import { TooltipTownInfo } from 'entities/towns/ui/tooltip-town-info-container/tooltip-town-info';
import { useHover } from 'shared/lib/hooks';
import s from './index.module.scss';


const
  icon = require('shared/assets/towns/icons/town-icon.png'),
  iconHover = require('shared/assets/towns/icons/town-icon-hover.png');

interface Props {
  town    : Town
  onClick : (townName: TownName) => void
}

/** Town on map */
export const TownPointMaker: FC<Props> = memo(({ town, onClick }) => {
  const
    [isHover, bindHover] = useHover(),
    { selectedTown } = useTowns(),
    selectedCurrentTown = useMemo(() => selectedTown?.title === town.title, [selectedTown]),
    activeIcon = useMemo(() => selectedCurrentTown ? iconHover : icon, [selectedCurrentTown]),
    ship = useMemo(() => ({ location: { point: { X: town.points.port[0].X, Y: town.points.port[0].Y } } }), [town.points.port]) as Ship,
  
    left = `${town.points.town.X}px`,
    top  = `${town.points.town.Y}px`;
    
  
  const handlerTownClick = useCallback(() => onClick(town.title), [selectedTown]);

      
  return (
    <>
      <div
        {...bindHover}
        className = {s.root}
        style     = {{ top, left }}
      >
        <TooltipTownInfo
          town      = {town}
          openTitle = {isHover}
        />
        <img
          id        = 'tooltip-town-info'
          src       = {activeIcon}
          alt       = 'town-icon'
          className = {s.icon}
          onClick   = {handlerTownClick}
        />
      </div>
      {/* Select place for port point */}
      {
        selectedCurrentTown && <ShipOnMap ship={ship} />
      }
    </>
  )
});
