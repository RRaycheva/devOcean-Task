import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './app/components/Layout';
import { getBusiness } from './redux/actions/BusinessActions';
import { connect } from "react-redux";
import './App.css'
import AppRoutes from './AppRoutes';
import { Business } from './app/Interfaces/Interfaces';

interface AppProps {
  businesses: Business[],
}


function App(props: AppProps) {
  const dispatch = useDispatch();
  const [isDataLoaded, setDataLoaded] = useState(true);

  useEffect(() => {
    dispatch(getBusiness())
  }, [])

  useEffect(() => {
    setDataLoaded(false)
  }, [props.businesses])

  return (
    <div className="App">
        <Layout>
          <AppRoutes isDataLoaded={isDataLoaded}/>
        </Layout>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    businesses: state.BusinessReducer.business
  };
}
export default connect(mapStateToProps)(App);
