import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components'
import * as L from 'leaflet'

import '../../node_modules/leaflet/dist/leaflet.css'

const LeafletMap = styled.div`
  #mapid { height: 500px; } 
`

const LeafletExamplePage = () => {
  useEffect(() => {

    var mymap = L.map('mapid').setView([40.7225, -74.0025], 14);
    console.log('mymap', mymap)
    console.log(process.env.LEAFLET_KEY)

    L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${process.env.LEAFLET_KEY}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: process.env.LEAFLET_KEY
    }).addTo(mymap);

    var marker = L.marker([37.7858, -122.401], { title: "My marker" }).addTo(mymap);

  }, []);


  return (

    <Layout>
      <Link to="/">{'<-'} Back Home</Link>
      <br />
      <SEO title="Leaflet Example" />
      <br />
      <h1>Leaflet Example</h1>

      <LeafletMap>
        <div id="mapid"></div>
      </LeafletMap>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
}

export default LeafletExamplePage;
