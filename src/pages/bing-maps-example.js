import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
// let Microsoft;

const BingMapsExamplePage = () => {

  let map, contextMenu;

  useEffect(() => {

    console.log("bing ", process.env.BING_MAPS_KEY)

    map = new Microsoft.Maps.Map('#myMap', {});
   
    Microsoft.Maps.Events.addHandler(map, 'rightclick', function (e) {
      //Open context menu.
      contextMenu.setOptions({
        location: e.location,
        visible: true
      });
      document.body.onmousedown = function () {
        closeContextMenu();
      };

      // }, 50)
      function closeContextMenu() {
        contextMenu.setOptions({ visible: false });
      }
    });

  }, [])

  return (

    < Layout >
      <Link to="/">{'<-'} Back Home</Link>
      <br />
      <SEO title="Bing Maps Example" />
      <br />
      <h1>Bing Maps Example</h1>

      <h3>Coming Soon...! 😋</h3>

      <div id="myMap" ></div>
      {/**  TODO - put bing maps example here ! */}

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
    </Layout >
  )
};

export default BingMapsExamplePage;
