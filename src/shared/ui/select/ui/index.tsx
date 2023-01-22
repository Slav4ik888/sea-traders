import { ChangeEvent, FC } from 'react';
import { cn } from 'shared/lib/class-names';
import s from './index.module.scss';



interface Props {
  options       : string[]
  // entries       : [string, string][] // Если список Enum тогда нужно вернуть 
  selectedValue : string
  className?    : string
  onChange      : (e: ChangeEvent<HTMLSelectElement>) => void
}


export const Select: FC<Props> = ({ options, selectedValue, className, onChange }) => {
  // const
  //   list = entries || options;


  return (
    <form className={cn(s.root, {}, [className])}>
      <select value={selectedValue} onChange={onChange}>
        {
          options?.length && options.map(value => (
            <option
              key   = {value}
              value = {value}
            >
              {value}
            </option>
          ))
        }
      </select>
    </form>
  )
};
