import React from 'react';
import { Image, Divider, HeaderSubheader, HeaderContent, Header, Icon, Card, CardContent, CardHeader, CardMeta, CardDescription } from 'semantic-ui-react';
import './HomePage.css';
import logo from '../../assets/nimbusLogo.png';

interface Dataset {
  id: number;
  name: string;
  lastAccess: string;
  totalRecords: string;
}

const HomePage: React.FC = () => {
  const datasets: Dataset[] = [
    { id: 1, name: "Dataset 1", lastAccess: "08/24/2023", totalRecords: "215015" },
    { id: 2, name: "Dataset 2", lastAccess: "11/29/2023", totalRecords: "57215" },
    { id: 3, name: "Dataset 3", lastAccess: "01/15/2024", totalRecords: "2150" },
    { id: 4, name: "Dataset 4", lastAccess: "02/16/2024", totalRecords: "215" },
    { id: 5, name: "Dataset 5", lastAccess: "02/21/2024", totalRecords: "5215" },
    { id: 6, name: "Dataset 6", lastAccess: "02/23/2024", totalRecords: "1300215" }
  ];  
  
  return (
    <div className='homepage-container'>
      <div className='homepage-header'>
        <Header as='h2' dividing>
          <Icon className='header-icon' name='cloud' />
          <HeaderContent>
            Your Datasets
            <HeaderSubheader>Frequent Use</HeaderSubheader>
          </HeaderContent>
        </Header>
      </div>
      <div className='homepage-card-container'>
        {datasets.sort((a, b) => new Date(a.lastAccess).getTime() - new Date(b.lastAccess).getTime()).slice(-2).map((dataset) => (
          <Card>
            <Image key={dataset.id} src={logo} wrapped ui={false} />
            <CardContent>
              <CardHeader>{dataset.name}</CardHeader>
              <CardMeta>
                <span className='date'>Last access: {dataset.lastAccess}</span>
              </CardMeta>
              <CardDescription>
                {dataset.totalRecords} Total Records
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <Divider horizontal inverted>
          All Datasets
      </Divider>
      <div className='homepage-card-container'>
        {datasets.map((dataset) => (
          <Card>
            <Image key={dataset.id} src={logo} wrapped ui={false} />
            <CardContent>
              <CardHeader>{dataset.name}</CardHeader>
              <CardMeta>
                <span className='date'>Last access: {dataset.lastAccess}</span>
              </CardMeta>
              <CardDescription>
                {dataset.totalRecords} Total Records
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;