/* eslint-disable react/prop-types */
import { Component } from 'react'
import { Toolbar } from '../Toolbar/Toolbar';
import { ProjectList } from '../ProjectList/ProjectList';
import classses from './Portfolio.module.css';

export default class Portfolio extends Component {

    constructor() {
        super()
        this.state = {
            selected: 'All',
        }
    }

   
    onSelectFilter = event  => {
        this.setState({selected: event})
   }

    render() {
        const { data } = this.props;
        return (
            <div className={classses.container} >
            
            <Toolbar 
                filters={data.filters} 
                onSelectFilter={this.onSelectFilter} 
                selected={this.state.selected}
            />
            <ProjectList selected={this.state.selected}/>
            </div>
                
           
        )
  }
}
