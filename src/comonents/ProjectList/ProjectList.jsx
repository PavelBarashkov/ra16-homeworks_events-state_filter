/* eslint-disable react/prop-types */
import { listCard } from '../../data/list';
import classes from './ProjectList.module.css';

export const ProjectList = ({selected}) => {

    function fll(data, tema) {

        const result = data.filter(item => {
            if (tema === "All") {
                return item
            }
            return item.category === tema 
        })
        return result;
    }

    const list = fll(listCard, selected);
    

  return (
        <div className={classes.container}>
            {list.map((item, i) => (
                    <div key={i} className={classes.card}>
                        <img src={item.img} alt={item.category} />
                    </div>
                )
            )}
        </div>
        
  )
}
