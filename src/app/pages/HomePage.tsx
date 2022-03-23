import { Table } from 'antd'
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { description, name } from '../constants';
import { Business, TableData } from '../Interfaces/Interfaces';
import './HomePage.css'

interface HomePageProps {
    busineses: Business[],
    isDataLoaded: boolean
}

const columns = [{
    title: name,
    dataIndex: 'name',
    key: 'name',
    width: '25%'
},
{
    title: description,
    dataIndex: 'description',
    key: 'description',
},
]

function HomePage(props: HomePageProps) {
    const navigate = useNavigate();

    const returnColumnsData = () => {
        let allbusineses: TableData[] = []
        if (props.busineses) {
            props.busineses.forEach((busineses: Business) => {
                allbusineses.push({
                    key: busineses.id,
                    name: busineses.name,
                    description: busineses.description

                })
            })
            return allbusineses
        }
    }

    const rowClicked = (row: TableData) => {
        let businessId = row.key
        navigate(`business/${businessId}`, { state: {
            business: businessId
        } })
    }

    return (
        <div className='homePage'>
            <Table scroll={{ y: 600 }} pagination={false} loading={props.isDataLoaded} dataSource={returnColumnsData()} columns={columns}
                onRow={(record: TableData) => {
                    return {
                        onClick: () => rowClicked(record)
                    };
                }}
            />
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        busineses: state.BusinessReducer.business
    };
}
export default connect(mapStateToProps)(HomePage)