import React, {Component} from 'react';
import Axios from 'axios';

import Pagination from "./pagination";
import GroupButton from './group-button';
import CardList from './card-list';
import ItemList from './item-list';
import DetailsModal from "./details-modal";

export default class ShopItems extends Component {
  constructor(props) {
    super(props);
    this.state = {isCardView: props.isCardView, items: []};
    this.handleViewChange = this.handleViewChange.bind(this);

    this.state.items = [
      {
        text: 'And Justice For All',
        image: './images/andjusticeforall.jpg'
      },
      {
        text: 'Black Album',
        image: './images/blackalbum.jpg'
      },
      {
        text: 'Death Magnetic',
        image: './images/deathmagnetic.jpg'
      },
      {
        text: 'Load',
        image: './images/load.jpg'
      },
      {
        text: 'Saint Anger Album',
        image: './images/stanger.jpg'
      },
      {
        text: 'Hardwired To Self Destruct',
        image: './images/hardwiredtoselfdestruct.jpg'
      },
      {
        text: 'Kill em All Album',
        image: './images/killemall.jpg'
      },
      {
        text: 'Reload',
        image: './images/reload.jpg'
      },
    ]
  }

  componentDidMount() {
    const baseUrl = 'http://localhost:3000';
    Axios.get(`${baseUrl}/albums`).then(response => {
      console.log("RESPONSE", response.data);
      this.setState({items: response.data.albums});
    }).catch(error => console.error(error));
  }

  handleViewChange(isCardView) {
    console.log('HANDLE VIEW CHANGE', isCardView);
    this.setState({isCardView: isCardView})
  }

  render() {
    return (
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={'col-md-12'}>
            <GroupButton />
          </div>
          <div className={'margin-bottom-5'}>
            <div className={'col-md-12'}>
              <br/>
            </div>
          </div>
        </div>

        {this.state.isCardView ? <CardList items={this.state.items}/> : <ItemList items={this.state.items}/>}

        <Pagination />

        <DetailsModal text={'Todo Get SElected ITEM'} image={''}/>

      </div>
    )
  }
}