import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import { Business } from '../Interfaces/Interfaces';
import './BusinessPage.css'
import { address, contact, dontKnow, EAT, nearbyPlaces } from '../constants';

interface BusinessPagesProps {
    businesses: Business[],

}

function BusinessPage(props: BusinessPagesProps) {
    const [business, setBusiness] = useState<Business>({
        id: 0,
        name: '',
        description: '',
        phone: '',
        image: '',
        email: '',
        address: {
            number: '',
            street: '',
            zip: '',
            city: '',
            country: ''
        }
    })
    const location = useLocation();
    //@ts-ignore
    const id = location.state.business

    useEffect(() => {
        props.businesses.forEach((business: Business) => {
            if (id === business.id) {
                setBusiness(business)
            }
        })
    }, [props.businesses])

    const returnConcatAddress = () => {
        let addressNumberAndStreet = `${business.address.number} ${business.address.street}`
        let cityAndZip = `${business.address.city}, ${business.address.zip}`

        return (
            <div id='gray' className='addressSubText'>
                <div>
                    {addressNumberAndStreet}
                </div>
                <div>
                    {cityAndZip}
                </div>
            </div>
        )
    }


    const returnConcatContact = () => {
        return (
            <div id='gray' className='contactSubText'>
                <div>
                    {business.phone}
                </div>
                <div>
                    {business.email}
                </div>
            </div>
        )
    }

    const returnNearbyPlaces = () => {
        return (<div className='nearbyPlacesSubText'>
            <span>{EAT}</span>
            <span>{dontKnow}</span>
        </div>)
    }


    return (
        <div className='businessPageWrap'>
            <img alt='business image' className='businessImage' src={business.image}/>
            <div className='subText'>
                <div className='addressContactGroup'>
                    <div className='adressText'>
                        <div id='subGroupText'>{address}</div>
                        {returnConcatAddress()}
                    </div>
                    <div className='contactText'>
                        <div id='subGroupText'>{contact}</div>
                        {returnConcatContact()}
                    </div>
                </div>
                <div className='playcesText'>
                    <div id='subGroupText' className='nearbyText'>{nearbyPlaces}</div>
                    {returnNearbyPlaces()}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        businesses: state.BusinessReducer.business
    };
}

export default connect(mapStateToProps)(BusinessPage)