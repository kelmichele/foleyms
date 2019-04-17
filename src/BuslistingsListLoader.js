import React, { Component } from 'react';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import BuslistingsList from "./BuslistingsList";

const ListBuslistings = `query ListBuslistings {
    listBuslistings(limit: 9999) {
        items {
          id
          name
          category
          website
        }
    }
}`;

class BuslistingsListLoader extends Component {
  onNewBuslisting = (prevQuery, newData) => {
    // When we get data about a new buslisting, we need to put in into an object 
    // with the same shape as the original query results, but with the new data added as well
    let updatedQuery = Object.assign({}, prevQuery);
    updatedQuery.listBuslistings.items = prevQuery.listBuslistings.items.concat([newData.onCreateBuslisting]);
    return updatedQuery;
  }

  render() {
    return (
      <Connect
        query={graphqlOperation(ListBuslistings)}
      // subscription={graphqlOperation(SubscribeToNewBuslistings)}
      // onSubscriptionMsg={this.onNewBuslisting}
      >
        {({ data, loading }) => {
          if (loading) { return <div>Loading...</div>; }
          if (!data.listBuslistings) return;

          return <BuslistingsList buslistings={data.listBuslistings.items} />;
        }}
      </Connect>
    );
  }
}
export default BuslistingsListLoader;






