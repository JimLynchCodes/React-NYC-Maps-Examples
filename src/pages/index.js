import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    {/* <head> */}
    <script type='text/javascript' src={`https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${process.env.BING_MAPS_KEY}`} ></script>
    {/* </head> */}
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to React Maps Examples!</h1>
    <p>The purpose of this little webapp is to show that you can build really nice map components for mobile web browsers in React. :)</p>
    <p>This app has examples with a few different mapping libaries:</p>

    <Link to="/google-maps-example/">- Google Maps Example</Link>
    <br />
    <Link to="/leaflet-example/">- Leaflet Example</Link>
    <br />
    <Link to="/open-layers-example/">- Open Layers Example</Link>
    <br />
    <Link to="/bing-maps-example/">- Bing Maps Example</Link>

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

export default IndexPage;
