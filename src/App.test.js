import React from 'react';
import renderer from 'react-test-renderer'
import App from './App';
import Customers from '../../src Folder/Components/Customers';
import CustomersTable from '../../src Folder/Components/CustomersTable'
import Pagination from '../../src Folder/Components/Pagination'
import CostPerDay from '../../src Folder/Components/CostPerDay'
import OrdersPerDay from '../../src Folder/Components/OrdersPerDay'
import Graphs from '../../src Folder/Components/Graphs'
import LineGraph from '../../src Folder/Components/LineGraph'
import BarGrapth from '../../src Folder/Components/BarGraph'

it('App component renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Customers component renders correctly', () => {
  const tree = renderer
    .create(<Customers />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('CustomersTable component renders correctly', () => {
  const tree = renderer
    .create(<CustomersTable />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Pagination component renders correctly', () => {
  const tree = renderer
    .create(<Pagination />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('CostPerDay component renders correctly', () => {
    const tree = renderer
      .create(<CostPerDay />)
      .toJSON();
      expect(tree).toMatchSnapshot();
});

it('OrdersPerDay component renders correctly', () => {
  const tree = renderer
    .create(<OrdersPerDay />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Graphs component renders correctly', () => {
  const tree = renderer
    .create(<Graphs />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('LineGraph component renders correctly', () => {
  const tree = renderer
    .create(<LineGraph />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

it('BarGraph component renders correctly', () => {
  const tree = renderer
    .create(<BarGrapth />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});