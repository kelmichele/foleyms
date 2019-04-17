import React, { Component } from 'react';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import BuslistingDetails from "./BuslistingDetails";

const GetBuslisting = `query GetBuslisting($id: ID!) {
  getBuslisting(id: $id) {
    id
    name
    category
    website
  }
}
`;

class BuslistingDetailsLoader extends Component {
  render() {
    return (
      <Connect query={graphqlOperation(GetBuslisting, { id: this.props.id })}>
        {({ data, loading }) => {
          if (loading) { return <div>Loading...</div>; }
          if (!data.getBuslisting) return;

          return <BuslistingDetails buslisting={data.getBuslisting} />;
        }}
      </Connect>
    );
  }
}
export default BuslistingDetailsLoader;