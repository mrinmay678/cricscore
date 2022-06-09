import React, {useEffect, useState} from 'react'
import { get_series } from '../lib/apis/series';
import "../styles/header.css";

const Header = () => {

  const [series, setSeries] = useState([]);
  useEffect(() => {
    let mounted = true;
    const fetchData = async() => {
      if(mounted){
        const series = await get_series();
        setSeries(series);
      }
    }
    fetchData();
    return () => mounted = false;
  }, []);

  return (
    <div className='header'>
      {series.map((result, index) => (
        <div key={index} className='header-series'>
        <h4>{result.type}</h4>
        {result.series.map((serie, index) => (
          <p>{index}, {serie.series_name}</p>
        ))}
        </div>
      ))}
    </div>
  )
}

export default Header;