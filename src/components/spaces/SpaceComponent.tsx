import {Component} from "react";
import genericImage from '../../assets/genericImage.jpg';
import './SpacesComponent.css';


interface SpaceComponentProps {
    spaceID: string,
    name: string,
    location: string,
    photoUrl?: string,
    reserveSpace: (spaceID: string)=> void
}

export class SpaceComponent extends Component<SpaceComponentProps> {

    private renderImage(){
        if (this.props.photoUrl) {
            return <img src={this.props.photoUrl} alt=''/>
        } else {
            return <img src={genericImage} alt=''/>
        }
    }

    render() {
        return (
            <div className='spaceComponent'>
                {this.renderImage()}<br/>
                <label className='name'>{this.props.name}</label><br/>
                <label className='spaceId'>{this.props.spaceID}</label><br/>
                <label className='location'>{this.props.location}</label><br/>
                <button onClick={() =>this.props.reserveSpace(this.props.spaceID)}>Reserve</button>
            </div>
        )
    }
}